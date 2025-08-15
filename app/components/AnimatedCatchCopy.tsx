"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"

// スマホ判定用のカスタムフック
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}

export default function AnimatedCatchCopy() {
  const { t } = useLanguage()
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const isMobile = useIsMobile()

  useEffect(() => {
    // 初期化：全ての行を非表示にする
    setVisibleLines([])
    
    // 順次表示のアニメーション
    const timeouts: NodeJS.Timeout[] = []
    
    // 1行目: 0ms後
    timeouts.push(setTimeout(() => {
      setVisibleLines(prev => [...prev, 0])
    }, 100))
    
    // 2行目: 600ms後
    timeouts.push(setTimeout(() => {
      setVisibleLines(prev => [...prev, 1])
    }, 700))
    
    // 3行目: 1200ms後
    timeouts.push(setTimeout(() => {
      setVisibleLines(prev => [...prev, 2])
    }, 1300))
    
    // クリーンアップ
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout))
    }
  }, [])

  const catchCopy = t("hero.catchCopy")
  
  // 翻訳が読み込まれていない場合の対処（親コンポーネントで既にチェック済みだが念のため）
  if (!catchCopy || typeof catchCopy === 'string') {
    return null
  }

  // モバイルの場合は「、」を削除
  const catchCopyData = catchCopy as { line1: string; line2: string; line3: string }
  const lines = [
    catchCopyData.line1 || "",
    catchCopyData.line2 || "",
    catchCopyData.line3 || ""
  ].map(line => isMobile ? line.replace("、", "") : line)

  return (
    <div className="catch-copy-container">
      <div className="catch-copy-wrapper">
        {lines.map((line, index) => (
          <span
            key={index}
            className={`catch-copy-line ${
              visibleLines.includes(index) ? 'is-show' : ''
            }`}
          >
            <span className="catch-copy-text">
              {line}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
