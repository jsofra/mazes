(ns mazes.canvas)

(def request-animation-frame
  (or js/requestAnimationFrame
      js/webkitRequestAnimationFrame))

(defn get-canvas-context-from-id [id]
  (let [canvas (.getElementById js/document id)]
    {:canvas canvas
     :width  (.-width canvas)
     :height (.-height canvas)
     :ctx    (.getContext canvas "2d")}))

(def context (get-canvas-context-from-id "canvas"))

(defn clear-canvas [{:keys [ctx width height]}]
  (.save ctx)
  (.setTransform ctx 1 0 0 1 0 0)
  (.clearRect ctx 0 0 width height)
  (.restore ctx))

(defn draw-line [{:keys [ctx]} points]
  (let [[[start-x start-y] & points] points]
    (.beginPath ctx)
    (.moveTo ctx start-x start-y)
    (doseq [[x y] points]
      (.lineTo ctx x y))
    (aset ctx "lineWidth" 1)
    (.stroke ctx)))
