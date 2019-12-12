(ns mazes.lsystems
  (:require [clojure.string :as string]
            [mazes.canvas :as canvas]))

(defn gen-lsystem [axiom rules]
  (let [rules-pattern (re-pattern (string/join "|" (keys rules)))]
    (-> #(string/replace % rules-pattern rules)
        (iterate axiom))))

(def hilbert-curve (gen-lsystem "A" {"A" "-BF+AFA+FB-"
                                     "B" "+AF-BFB-FA+"}))

(def hilbert-curve-II (gen-lsystem "X" {"X" "XFYFX+F+YFXFY-F-XFYFX"
                                        "Y" "YFXFY-F-XFYFX+F+YFXFY"}))

(defn new-point [[x y] dist dir]
  (let [dir (* dir (/ Math/PI 180))]
    [(+ x (* dist (Math/cos dir)))
     (+ y (* dist (Math/sin dir)))]))

(defn generate-points [start-point turn-angle steps]
  (loop [[step & steps] steps
         angle        180
         points       [start-point]
         state        []]
    (case step
      "+" (recur steps (mod (+ angle turn-angle) 360) points state)
      "-" (recur steps (mod (- angle turn-angle) 360) points state)
      "F" (recur steps angle (conj points (new-point (last points) 10 angle)) state)
      "[" (recur steps angle points (conj state [angle (last points)]))
      "]" (let [[angle point] (peek state)]
            (recur steps angle (conj points point) (pop state)))
      nil points
      (recur steps angle points state))))


(def xmas-tree (gen-lsystem "+++++SLFFF" {"S" "[+++G][---G]TS"
                                          "G" "+H[-G]L"
                                          "H" "-G[+H]L"
                                          "T" "TL"
                                          "L" "[-FFF][+FFF]F"}))

(comment
  (do (canvas/clear-canvas canvas/context)
      (->> (nth hilbert-curve 5)
           (generate-points [500 100] 90)
           (canvas/draw-line canvas/context)))

  (do (canvas/clear-canvas canvas/context)
      (->> (nth xmas-tree 10)
           (generate-points [400 400] 18)
           (canvas/draw-line canvas/context)))
  )
