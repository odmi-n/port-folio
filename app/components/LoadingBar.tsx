"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function LoadingBar() {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    let progressInterval: NodeJS.Timeout
    let timeoutId: NodeJS.Timeout

    const startLoading = () => {
      setLoading(true)
      setProgress(0)

      // プログレスバーを0から100%まで徐々に増加
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            return prev + Math.random() * 2 // 90%以降はゆっくり
          }
          return prev + Math.random() * 15 + 5 // 0-90%は比較的速く
        })
      }, 50)

      // 最大2秒でローディング完了
      timeoutId = setTimeout(() => {
        setProgress(100)
        setTimeout(() => {
          setLoading(false)
          setProgress(0)
        }, 200)
      }, 800)
    }

    // ページ変更時にローディング開始
    startLoading()

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timeoutId)
    }
  }, [pathname])

  if (!loading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-800">
      <div
        className="h-full bg-white transition-all duration-100 ease-out"
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>
  )
}
