"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

// ─── Types ──────────────────────────────────────────────────────────────────

interface StatCardProps {
  /** Large stat displayed prominently, e.g. "18+" */
  stat?: string;
  /** Supporting description text */
  description?: string;
}

/**
 * StatCard
 *
 * Navy-blue card with:
 *  - 48px border-radius on all corners except top-right
 *  - A circular "pocket" cutout on the top-right where a bright-blue
 *    circular arrow button sits flush
 *
 * The cutout is achieved with an inline SVG clipPath so it scales with
 * the card dimensions.
 */
export default function StatCard({
  stat = "18+",
  description = "We are thrilled to announce the successful completion of yet another milestone project",
}: StatCardProps) {
  const W = 220;        // card width  (px)
  const H = 270;        // card height (px)
  const R = 48;         // main border-radius
  const BTN = 56;       // button diameter
  const CR = BTN / 2 + 10; // cutout radius (button-radius + breathing room)

  // Unique id so multiple cards on the same page don't clash
  const clipId = React.useId().replace(/:/g, "");

  /**
   * SVG path that draws the card shape:
   *   - top-left rounded corner
   *   - runs right until it meets the cutout
   *   - carves a concave arc for the button pocket
   *   - top-right corner is square (button sits there)
   *   - bottom-right, bottom-left rounded corners
   */
  const path = `
    M ${R} 0
    L ${W - CR * 2} 0
    A ${CR} ${CR} 0 0 0 ${W} ${CR * 2}
    L ${W} ${H - R}
    Q ${W} ${H} ${W - R} ${H}
    L ${R} ${H}
    Q 0 ${H} 0 ${H - R}
    L 0 ${R}
    Q 0 0 ${R} 0
    Z
  `;

  return (
    /**
     * Outer wrapper — slightly larger than the card so the floating button
     * that sits in the top-right corner doesn't get clipped by overflow:hidden.
     */
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        width: W,
        // give top some room for button overflow
        pt: `${CR}px`,
        pr: `${CR}px`,
      }}
    >
      {/* ── Floating circular button ── */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: BTN,
          height: BTN,
          borderRadius: "50%",
          bgcolor: "#4d6ef5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 1,
          boxShadow: "0 4px 20px rgba(77,110,245,0.5)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "scale(1.08)",
            boxShadow: "0 8px 28px rgba(77,110,245,0.7)",
          },
        }}
      >
        <NorthEastIcon sx={{ color: "#fff", fontSize: 26 }} />
      </Box>

      {/* ── Card body ── */}
      <Box sx={{ position: "relative", width: W, height: H }}>
        {/* Inline SVG provides the clipPath */}
        <svg
          width={0}
          height={0}
          style={{ position: "absolute" }}
          aria-hidden="true"
        >
          <defs>
            <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
              <path d={path} />
            </clipPath>
          </defs>
        </svg>

        {/* Clipped navy background */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "#1a2560",
            clipPath: `url(#${clipId})`,
          }}
        />

        {/* Content — centred vertically, padded from left/right */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: 3,
            // shift content down slightly so it doesn't crowd the cutout
            pt: `${CR + 8}px`,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: "2.8rem",
              lineHeight: 1,
              mb: 1.5,
              textAlign: "center",
            }}
          >
            {stat}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              textAlign: "center",
              lineHeight: 1.6,
              fontSize: "0.85rem",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
