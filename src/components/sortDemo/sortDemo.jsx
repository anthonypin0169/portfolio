import { useState, useRef } from "react"
import { IconPlay } from "../icons/icons"
import "./sortDemo.scss"

function createShuffledArray(size) {
    const arr = Array.from({ length: size }, (_, i) => ((i + 1) / size) * 100)

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    return arr
}

function getBubbleSortSteps(array) {
    const steps = []
    const arr = [...array]

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                steps.push([...arr])
            }
        }
    }

    return steps
}

function getQuickSortSteps(array) {
    const steps = []
    const arr = [...array]

    function partition(low, high) {
        const pivot = arr[high]
        let i = low - 1

        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
                steps.push([...arr])
            }
        }

        const temp = arr[i + 1]
        arr[i + 1] = arr[high]
        arr[high] = temp
        steps.push([...arr])

        return i + 1
    }

    function quickSort(low, high) {
        if (low < high) {
            const pivotIndex = partition(low, high)
            quickSort(low, pivotIndex - 1)
            quickSort(pivotIndex + 1, high)
        }
    }

    quickSort(0, arr.length - 1)
    return steps
}

function playSteps(steps, setBars, intervalRef) {
    clearInterval(intervalRef.current)
    let index = 0

    intervalRef.current = setInterval(() => {
        if (index >= steps.length) {
            clearInterval(intervalRef.current)
            return
        }
        setBars(steps[index])
        index++
    }, 20)
}

function SortDemo() {

    const [unoptiBars, setUnoptiBars] = useState(() => createShuffledArray(50))
    const [optiBars, setOptiBars] = useState(() => createShuffledArray(50))
    const unoptiIntervalRef = useRef(null)
    const optiIntervalRef = useRef(null)

    function runComparison() {
        const shuffled = createShuffledArray(50)
        setUnoptiBars(shuffled)
        setOptiBars(shuffled)

        const bubbleSteps = getBubbleSortSteps(shuffled)
        const quickSteps = getQuickSortSteps(shuffled)

        playSteps(bubbleSteps, setUnoptiBars, unoptiIntervalRef)
        playSteps(quickSteps, setOptiBars, optiIntervalRef)
    }

    return (
        <section className="optimisation">
            <h2 className="optimisation__h2">Optimisations et performances</h2>

            <button onClick={runComparison} className="optimisation__btn">
                <IconPlay className="fa-play" />
            </button>

            <div className="optimisation__group">
                <div className="optimisation__container">
                    <h3>Bubble sort (non optimisé)</h3>
                    <div className="sort-demo__bars">
                        {unoptiBars.map((value, i) => (
                            <div key={i} className="sort-demo__bar" style={{ height: `${value}%` }} />
                        ))}
                    </div>
                </div>

                <div className="optimisation__container">
                    <h3 className="optimisation__container--2nd-h3">Quick sort (optimisé)</h3>
                    <div className="sort-demo__bars">
                        {optiBars.map((value, i) => (
                            <div key={i} className="sort-demo__bar" style={{ height: `${value}%` }} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="border">
                <div className="border__detail-card">
                    <h4 className="border__detail-card--paragraph">Optimiser les différents éléments afin d'alléger le site.</h4>
                    <ul className="border__detail-card--sub-paragraph">
                        <li>Optimisation des images (compression Avif, lazy loading..)</li>
                        <li>Minification (JS / CSS minifiés, tree-shaking..)</li>
                        <li>Mise en cache (Navigateur, CDN..)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default SortDemo
