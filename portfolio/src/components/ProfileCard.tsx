import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import "./ProfileCard.css";

type SocialLink = {
  icon: React.ElementType;
  href: string;
  label: string;
};

type ProfileCardProps = {
  avatarUrl: string;
  miniAvatarUrl?: string;
  name: string;
  title: string;
  handle: string;
  status: string;
  socialLinks: SocialLink[];
};

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
};

const clamp = (value: number, min = 0, max = 100) =>
  Math.min(Math.max(value, min), max);

const round = (value: number, precision = 3) =>
  parseFloat(value.toFixed(precision));

const adjust = (
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
) =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

const easeInOutCubic = (x: number) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  miniAvatarUrl,
  name,
  title,
  handle,
  status,
  socialLinks
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const animationHandlers = useMemo(() => {
    let rafId: number | null = null;

    const updateCardTransform = (
      offsetX: number,
      offsetY: number,
      card: HTMLElement,
      wrap: HTMLElement
    ) => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties: Record<string, string> = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (
      duration: number,
      startX: number,
      startY: number,
      card: HTMLElement,
      wrap: HTMLElement
    ) => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animationLoop = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration);
        const easedProgress = easeInOutCubic(progress);

        const currentX = adjust(easedProgress, 0, 1, startX, targetX);
        const currentY = adjust(easedProgress, 0, 1, startY, targetY);

        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop);
        }
      };

      rafId = requestAnimationFrame(animationLoop);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      },
    };
  }, []);

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap || !animationHandlers) return;
      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(
        event.clientX - rect.left,
        event.clientY - rect.top,
        card,
        wrap
      );
    },
    [animationHandlers]
  );

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap || !animationHandlers) return;
    animationHandlers.cancelAnimation();
    wrap.classList.add("active");
    card.classList.add("active");
  }, [animationHandlers]);

  const handlePointerLeave = useCallback(
    (event: PointerEvent) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap || !animationHandlers) return;
      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        event.offsetX,
        event.offsetY,
        card,
        wrap
      );
      wrap.classList.remove("active");
      card.classList.remove("active");
    },
    [animationHandlers]
  );

  useEffect(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    card.addEventListener("pointerenter", handlePointerEnter as any);
    card.addEventListener("pointermove", handlePointerMove as any);
    card.addEventListener("pointerleave", handlePointerLeave as any);

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(
      ANIMATION_CONFIG.INITIAL_DURATION,
      initialX,
      initialY,
      card,
      wrap
    );

    return () => {
      card.removeEventListener("pointerenter", handlePointerEnter as any);
      card.removeEventListener("pointermove", handlePointerMove as any);
      card.removeEventListener("pointerleave", handlePointerLeave as any);
      animationHandlers.cancelAnimation();
    };
  }, [animationHandlers, handlePointerMove, handlePointerEnter, handlePointerLeave]);

  const cardStyle = useMemo(
    () => ({
      "--behind-gradient": DEFAULT_BEHIND_GRADIENT,
      "--inner-gradient": DEFAULT_INNER_GRADIENT,
    } as React.CSSProperties),
    []
  );

  return (
    <TooltipProvider>
      <div ref={wrapRef} className="pc-card-wrapper" style={cardStyle}>
        <Card ref={cardRef} className="pc-card">
          <CardContent className="pc-inside p-0">
            <div className="pc-content pc-avatar-content">
              <Avatar className="avatar w-full h-full">
                <AvatarImage
                  src={avatarUrl}
                  alt={`${name} avatar`}
                  className="w-full h-full object-cover"
                />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="pc-social-icons">
                {socialLinks.map((link) => (
                  <Tooltip key={link.label}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="pc-social-icon"
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.label}
                        >
                          {React.createElement(link.icon, { size: 18 })}
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{link.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
            <div className="pc-content">
              <div className="pc-details">
                <h3 className="text-2xl font-bold text-foreground">{name}</h3>
                <p className="text-muted-foreground">{title}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default ProfileCard; 