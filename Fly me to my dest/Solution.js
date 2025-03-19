// Fly Me to My Destination

function minPlanesToDestination(fuelArr) {
    let N = fuelArr.length;
    if (N === 1) return 0;
    if (fuelArr[0] === 0) return -1;

    let planesHired = 0;
    let maxReach = 0;
    let currentEnd = 0;

    for (let i = 0; i < N - 1; i++) {
        maxReach = Math.max(maxReach, i + fuelArr[i]);

        if (i === currentEnd) {
            planesHired++;
            currentEnd = maxReach;

            if (currentEnd >= N - 1) {
                return planesHired;
            }
        }

        if (i >= maxReach) {
            return -1;
        }
    }

    return planesHired;
}

//Test Cases
console.log(minPlanesToDestination([2, 1, 2, 3, 1])); // Output: 2
console.log(minPlanesToDestination([1, 6, 3, 4, 5, 0, 0, 0, 6])); // Output: 3
console.log(minPlanesToDestination([3, 2, 1, 0, 4])); // Output: -1
console.log(minPlanesToDestination([1, 1, 1, 1, 1])); // Output: 4


// Algorithm:
// 1. Initialize Variables:
//    `planesHired = 0` → To track the number of planes hired.
//    `maxReach = 0` → Tracks the farthest airport reachable with the current planes.
//    `currentEnd = 0` → Marks the end of the current plane’s range.
//    `N = arr.length` → Number of airports.

// 2. Traverse the Airports (Greedy Strategy):
//    Iterate through the array and update `maxReach` to find the farthest airport you can reach.
//    If you reach `currentEnd`, **hire a new plane** and update `currentEnd = maxReach`.
//    If at any point, `maxReach` is less than the current index, return `-1` (not possible to reach).

// 3. Edge Case:
//    If the array has only one airport, return `0` (no need to hire any plane).
//    If the first airport has `0` fuel and is not the last one, return `-1`.


// Time Complexity: O(N)
// Space Complexity: O(1)
