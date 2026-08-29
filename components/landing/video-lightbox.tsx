// components/landing/video-lightbox.tsx
"use client"

import { useEffect, useState } from "react"
import { X, Play } from "lucide-react"

interface VideoLightboxProps {
  vimeoId: string
  vimeoHash?: string
  thumbnailSrc: string
  thumbnailAlt?: string
}

function VideoPreview({
  thumbnailSrc,
  thumbnailAlt,
  onClick,
}: {
  thumbnailSrc: string
  thumbnailAlt: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block w-full overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl"
      aria-label={thumbnailAlt}
    >
      <img
        src={thumbnailSrc}
        alt={thumbnailAlt}
        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl transition-transform duration-200 group-hover:scale-110 md:h-20 md:w-20">
          <Play className="ml-1 h-6 w-6 fill-foreground text-foreground md:h-7 md:w-7" />
        </span>
      </div>
    </button>
  )
}

function VideoModal({
  open,
  onClose,
  vimeoId,
  vimeoHash,
}: {
  open: boolean
  onClose: () => void
  vimeoId: string
  vimeoHash?: string
}) {
  const [ended, setEnded] = useState(false)
  const iframeId = "adc-diagnostic-video"

  useEffect(() => {
    if (!open) return

    setEnded(false)
    let player: import("@vimeo/player").default | null = null

    const init = async () => {
      const VimeoPlayer = (await import("@vimeo/player")).default
      const iframe = document.getElementById(iframeId) as HTMLIFrameElement | null
      if (!iframe) return
      player = new VimeoPlayer(iframe)
      player.on("ended", () => setEnded(true))
    }

    init()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      player?.off("ended")
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  if (!open) return null

  const hashParam = vimeoHash ? `h=${vimeoHash}&` : ""
  const embedUrl =
    `https://player.vimeo.com/video/${vimeoId}?${hashParam}` +
    `badge=0&autopause=0&player_id=${iframeId}&app_id=58479&autoplay=1&` +
    `title=0&byline=0&portrait=0&controls=0&sidedock=0&dnt=1&api=1&loop=0`

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="fixed right-4 top-4 z-[10000] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6 md:top-6"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full">
          <iframe
            id={iframeId}
            src={embedUrl}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full transition-opacity duration-300"
            style={{ opacity: ended ? 0 : 1 }}
            title="The Biology of Weight Loss"
          />
          {/* Masks the free-tier Vimeo logo pill (bottom-right corner) —
              not removable via URL params without an upgraded plan */}
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-10 w-16 bg-black md:h-12 md:w-20"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}

export function VideoLightbox({
  vimeoId,
  vimeoHash,
  thumbnailSrc,
  thumbnailAlt = "Watch: why tracking alone doesn't stop the hunger spike",
}: VideoLightboxProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <VideoPreview thumbnailSrc={thumbnailSrc} thumbnailAlt={thumbnailAlt} onClick={() => setOpen(true)} />
      <VideoModal open={open} onClose={() => setOpen(false)} vimeoId={vimeoId} vimeoHash={vimeoHash} />
    </>
  )
}
