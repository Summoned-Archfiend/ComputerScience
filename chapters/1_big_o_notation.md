# Big O Notation and Algorithm Efficiency

Big O notation is a fundamental tool for assessing the efficiency of algorithms. It allows us to model the time taken by a function based on the number of inputs. While time is an important factor, we are primarily concerned with the order of magnitude rather than precise timings.

Consider two functions: one takes 100 milliseconds over 1000 inputs, and the other takes 120 milliseconds. If the extra 20 milliseconds does not affect the function's functionality or any time-sensitive requirements, we might prioritize code readability or maintainability.

However, if another function takes 30 seconds to complete with the same 1000 inputs, the time difference becomes significant. A variation of 10 milliseconds versus 30 seconds greatly impacts the overall performance of our application.

Let's analyze the expression: `3x^2 + x + 1`, assuming `x = 5`. This equation consists of three terms: `3x^2`, `x`, and `1`. To understand which term has the greatest impact on the overall result, we can evaluate them individually.

By basic mathematical knowledge, we recognize that multiplication has a greater impact than addition because it performs repeated addition. Additionally, squaring a number is equivalent to multiplying the number by itself. Comparing the terms `3x^2`, `x`, and `1`, we can conclude that `3x^2` has the greatest impact on the outcome due to the multiplication involved. To us this means that the largest
piece of our metaphorical pie comes from the first term of the expression, the larger the number we plug into this expression the more apparent this will become, for instance `x = 5,000,000` results in `term1 = 75,000,000,000,000` and `term2: = 5,000,000` and the final term of `1`. This large gap means we can essentially ignore everything but the first term and have very little impact on our overall equation.

This is precisely what we refer to when discussing Big O notation. It allows us to focus on the dominant term, which has the greatest impact on the overall result, while ignoring less significant terms. In the case of our example expression `3x^2 + x + 1`, the dominant term is `3x^2`, which exhibits a quadratic relationship.

By considering the expression as having a quadratic time complexity, denoted as `O(n^2)`, we understand that, in the worst-case scenario, the number of operations required grows quadratically with the input size `n`. This means that, for each input, we would need to perform operations approximately `n^2` times. As you may note we even ignore the coefficient in this case as the coefficient itself is insignificant in the broader terms of the overall resultant output.

In summary, Big O notation allows us to analyze the efficiency of algorithms by focusing on the most significant term, which gives us insights into the relationship between the input size and the number of operations required. By identifying the dominant term and assigning the appropriate time complexity, we can make informed decisions about algorithm selection and optimization.

## Applying Big O to Algorithms

When applying Big O notation to algorithms, we want to understand how the time complexity of the algorithm scales with the size of the input. Let's examine the following function as an example:

<code>
<pre>
function crossAdd(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    var goingUp = input[i];
    var goingDown = input[input.length - 1 - i];
    answer.push(goingUp + goingDown);
  }
  return answer;
}
</pre>
</code>

To determine the time complexity of this function, we focus on the most significant factor, which in this case is the for loop. The loop iterates through each element in the input array, performing a constant number of operations for each iteration.

Since the loop executes for every item in the input array, the time taken by the algorithm scales linearly with the size of the input. If the first running of the function takes a certain time (e.g. `5 milliseconds`), we can expect that doubling the input size will approximately double the time taken by the algorithm.

This linear relationship between input size and time complexity is denoted as `O(n)`, indicating that the algorithm exhibits linear time complexity. Regardless of the exact time measurement, we know that the time taken by the algorithm will increase proportionally with the input size.

It can help to imagine the input contains `1 million` elements. This would mean that the for loop would need to run all of those steps `1 million` times, now we would expect the time taken to execute the function to roughly equate to the same time each execution (obviously with some minor deviation), this would mean we would expect an approximation of `1 million` times the time of execution with a single element.

By understanding the time complexity of our algorithms using Big O notation, we can make informed decisions when analyzing and optimizing our code. We can even use a simple hack to remember how exactly we should evaluate our algorithms, the hack is to simply look for loops. Loops have the greatest impact on our algorithms, if we have many operations within our loop that would be like having a coefficient on our equation which, as we demonstrated, is insignificant. If we have an algorithm with no loops then the time complexity would be constant as it would always be the same time complexity no matter the input size, thus we would refer to this as constant time `0(1)`. Remember, we are only interested in the broad time complexity when we use Big O, thus the details can be extracted out.


Lets look at another example:

<code>
<pre>
function find(needle, haystack) {
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return true;
  }
}
</pre>
</code>

You may look at this and be thinking well, we have a loop but the function itself could return after a single iteration, this is true but we would still refer to this as `O(n)` linear complexity. Why do we do this? well, in the worst case scenario the loop will have to go through every item in the array, even though in our best case scenario it would return almost immediately this is again simply a coefficient on our expression, thus we can ignore it.

So, what if we have nested loops:

<code>
<pre>
function makeTuples(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      answer.push([input[i], input[j]]);
    }
  }
  return answer;
}
</pre>
</code>


By having a loop inside of a loop we have the worst case scenario of having to iterate through an entire array, and possibly even an entire second array whilst we are looping through the first. This would mean that the above function would have a quadratic complexity `O(n^2)`, this would grow depending on the number of loops in the function; for instance, a function with 3 nested loops would be of Big O `O(n^3)`.

If we instead access an item of an array directly we end with a complexity of constant time `O(1)`, this is because accessing an array directly will always have the same time complexity.

<code>
<pre>
function getMiddleOfArray(array) {
  return array[Math.floor(array.length / 2)];
}
</pre>
</code>

## Summary

We can summise Big O time complexities for a clearer picture, this can be easier to remember than simply trying to memorise each complexity without context.

### Constant Time Complexity - O(1)

Expression: `f(n) = 1`

<code>
<pre>
def print_first_element(arr):
    print(arr[0])
</pre>
</code>

### Logarithmic Time Complexity - O(log n)

Expression: `f(n) = log₂(n)`

<code>
<pre>
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
</pre>
</code>

### Linear Time Complexity - O(n)

Expression: `f(n) = n`

<code>
<pre>
def find_max(arr):
    max_val = float('-inf')
    for num in arr:
        if num > max_val:
            max_val = num
    return max_val
</pre>
</code>

### Linearithmic Time Complexity - O(n log n)

Expression: `f(n) = n log₂(n)`

<code>
<pre>
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)
</pre>
</code>

### Quadratic Time Complexity - O(n²)

Expression: `f(n) = n²`

<code>
<pre>
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
</pre>
</code>

[Next >>]()