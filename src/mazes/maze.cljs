(ns mazes.maze
  (:require [clojure.set :as set]
            [mazes.canvas :as canvas]))

(defn unvisited-neighbours [loc {:keys [visited width height]}]
  (let [neighbours (set (->> [[0 1] [1 0] [0 -1] [-1 0]]
                             (map #(mapv + % loc))
                             (filter (fn [[x y]]
                                       (and (<= 0 x (dec width))
                                            (<= 0 y (dec height)))))))]
    (set/difference neighbours (set (keys visited)))))

(defn gen-maze [start width height]
  (let [init-board {:visited {start nil} :width width :height height}]
    (loop [{:keys [visited] :as board} init-board
           loc                         start]
      (let [unvisited (unvisited-neighbours loc board)]
        (if (seq unvisited)
          (let [next (rand-nth (seq unvisited))]
            (recur (update board :visited assoc next loc) next))
          (if-let [next (get visited loc)]
            (recur board next)
            board))))))

(defn draw-maze [context {:keys [visited]}]
  (let [point (fn [[x y]] [(+ (* x 10) 100) (+ (* y 10) 100)])]
    (doseq [[to from] visited :when (and to from)]
      (canvas/draw-line context [(point to) (point from)]))))

(comment
  (count (:visited (gen-maze [0 0] 40 40)))

  (do (canvas/clear-canvas canvas/context)
      (->> (gen-maze [0 0] 20 20)
           (draw-maze canvas/context)))
  )
