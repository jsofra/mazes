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

(defn generate-points [start-point steps]
  (loop [[step & steps] steps
         angle        90
         points       [start-point]]
    (case step
      "+" (recur steps (mod (+ angle 90) 360) points)
      "-" (recur steps (mod (- angle 90) 360) points)
      "F" (recur steps angle (conj points (new-point (last points) 10 angle)))
      nil points
      (recur steps angle points))))

(comment
  (do (canvas/clear-canvas canvas/context)
      (->> (nth hilbert-curve 4)
           (generate-points [100 100])
           (canvas/draw-line canvas/context)))

  (do (canvas/clear-canvas canvas/context)
      (->> (nth hilbert-curve-II 3)
           (generate-points [790 10])
           (canvas/draw-line canvas/context))))
