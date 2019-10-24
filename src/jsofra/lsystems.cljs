(ns jsofra.lsystems
  (:require [clojure.string :as string]))

(defn gen-lsystem [axiom rules]
  (let [rules-pattern (re-pattern (string/join "|" (keys rules)))]
    (-> #(string/replace % rules-pattern rules)
        (iterate axiom))))

(def hilbert-curve (gen-lsystem "A" {"A" "-BF+AFA+FB-"
                                     "B" "+AF-BFB-FA+"}))

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

(defn new-point [[x y] dist dir]
  (let [dir (* dir (/ Math/PI 180))]
    [(+ x (* dist (Math/cos dir)))
     (+ y (* dist (Math/sin dir)))]))

(defn generate-points [start-point steps]
  (loop [[step & steps] steps
         angle          90
         points         [start-point]]
    (if step
      (let [dir (mod (case step
                       "+" (+ angle 90)
                       "-" (- angle 90)
                       angle)
                     360)]
        (recur steps
               dir
               (if (= step "F")
                 (conj points (new-point (last points) 10 dir))
                 points)))
      points)))

(defn draw-line [{:keys [ctx]} points]
  (let [[[start-x start-y] & points] points]
    (.beginPath ctx)
    (.moveTo ctx start-x start-y)
    (doseq [[x y] points]
      (.lineTo ctx x y))
    (aset ctx "lineWidth" 1)
    (.stroke ctx)))

(do (clear-canvas context)
    (->> (nth hilbert-curve 5)
         (generate-points [100 100])
         (draw-line context)))
