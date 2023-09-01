# Sudoku Assignment

**_Note:_** In the context of this exercise, the index for arrays or other data structures will start from 0. This means that the first element in the array will be accessed using index 0, the second element with index 1, and so on. This convention aligns with the standard practice in programming languages and is widely used across various programming paradigms.

## Task 1

The function **makeVector** should take a four-element vector called row as an input parameter and return a vector of four elements
called puzzle: each element of puzzle should contain the four-element vector row.

```c
function makeVector(row)
   puzzle <- new Vector()

   for (0 <= i <= 3) do
      puzzle.insertAt(row, 2)
   end for

   return puzzle
end function
```

## Task 2

The function **permuteVector** should take a four-element vector called row as an input parameter and return that vector but with
its values cyclically permuted by p elements to the left: p should be a number between 0 and 3 (inclusive).

```c
function permuteVector(row, p)
   if (p = 0) then
      return row
   end if

   // create new queue
   queue <- new Queue()

   // enqueue each item in row
   for (0 <= i <= LENGTH(row) - 1) do
      queue.enqueue(row.select(i))
   end for

   // rotate queue
   for (0 <= i <= p - 1) do
      queue.enqueue(queue.dequeue())
   end for

   return queue
end function
```

At this point we have a queue, but in order to be consistent we may want to transform this queue into a vector again, this process can be done as follows:

```c
function vectorFromQueue(queue)
   vector <- new Vector()
   // enqueue each item in the vector
   for (0 <= i <= 3) do
      vector.insertAt(queue.dequeue(), i)
   end for

   return vector
end function
```

## Task 3

The function **permuteRows** should take a four-element vector called puzzle, which will be of the form of the output of MakeVector as an input parameter, as well as three integers x, y and z. The function will return puzzle but with elements puzzle[1], puzzle[2] and puzzle[3] cyclically permuted by x, y and z elements respectively to the left: x, y and z should all be numbers between 0 and 3 (inclusive).

```c
function permuteRows(puzzle, x, y, z)
   // create new vector to hold permuted rows
   vector <- new Vector()

   // insert permuted rows into vector
   vector.insertAt(puzzle.select(0), 0)
   vector.insertAt(permuteVector(puzzle.select(1), x), 1)
   vector.insertAt(permuteVector(puzzle.select(2), y), 2)
   vector.insertAt(permuteVector(puzzle.select(3), z), 3)

   // return permuted vector
   return vector
end function
```

## Task 4

The function **searchStack** will take a stack and a value (called item) as input parameters, and return FALSE if item is not stored in the stack, otherwise return the stack without the element storing item.

```c
function searchStack(stack, item)
   holder <- new Stack()
   found <- false

   while (not stack.isEmpty()) do
      // get element from stack
      element <- stack.pop()

      // if element is equal to item, set found to true and break
      if (element = item) then
         found <- true
         break
      end if

      holder.push(element)
   end while

   // put elements back into stack
   while (not holder.isEmpty()) do
      stack.push(holder.pop())
   end while

   // if item is found, return stack
   if (found) then
      return stack
   end if

   // return false if item is not found
   return false
end function
```

## Task 5

The function **checkColumn** will take the vector puzzle (as produced by MakeVector) as an input parameter and check that
column j contains all numbers from 1 to 4: if it does contain all numbers from 1 to 4, it should return TRUE,
otherwise itshould return FALSE.

```c
function checkColumn(puzzle, j)
   numbers <- new Stack()

   // build stack with numbers 1-4
   for 1 <= i <= 4 do
      numbers.push(i)
   end for

   k <- 0

   // while k is less than 4 (the length of the column)
   while (k <= 3) do
      // select the row at index k, then select the column at index j
      value <- puzzle.select(j).select(k)

      // search the stack for the value
      stack <- searchStack(numbers, value)

      // if the value is not found, return false
      if (not stack) then
         return false
      end if

      k++
   end while

   // if all values are found, return true
   return true
end function
```

## Task 6

The function **checkGrids** will take the vector puzzle (as produced by MakeVector) as an input parameter and check that all
sub-grids contain all numbers from 1 to 4: if every sub-grid does contain all numbers from 1 to 4, it should return
TRUE, otherwise it should return FALSE. For each sub-grid you should create a stack with numbers from 1 to 4,
and then repeatedly search the stack to see if the values in the sub-grid are stored there.

For this task I decided to split the logic into two functions, similar to the previous task, one for check each sub-grid, and other function to check all sub-grids:

```c
function checkGrid(puzzle, i, j)
   numbers <- new Stack()

   for (1 <= i <= 4) do
      numbers.push(i)
   end for

   k <- 0
   l <- 0

   for (0 <= row <= i - 1) do
      for (0 <= column <= j - 1) do
         value <- puzzle.select(ii).select(jj)
         stack <- searchStack(numbers, value)
         // if the value is not found, return false
         if (not stack) then
            return false
         end if
      end for
   end for

   // if all values are found, return true
   return true
end function
```

The following function traverses the 4 subgrids of a Sudoku grid by incrementing the indices by 2 at each iteration. This allows us to check each subgrid individually.

```c
function checkGrids(puzzle)
   for (0 <= i <= 2) do
      i <- i + 2
      for (0 <= j <= 2) do
         j <- j + 2

         if (not checkGrid(puzzle, i, j)) then
            return false
         end if
      end for
   end for

   return true
end function
```

## Task 7

Design and explain a concrete data structure that implements this puzzle vector. The data structure must only consist of elementsthat can store an integer or a pointer to another element or null - elements can be indexed if they are contiguous in memory as with an array. You can draw the data structure and explain how the allowed operations of vectors are implemented on this concrete data structure - additional pointers can be created to traverse lists. One approach could be to use arrays, or linked lists, or another approach completely.

I have chosen to implement the puzzle vector using arrays. Implementing the puzzle vector as an array-based data structure offers several advantages.

-  Firstly, using arrays allows for direct indexing of elements, which means accessing elements by their position is efficient with constant time complexity (O(1)). This indexing capability is essential for various vector operations, such as retrieving specific elements or updating their values.

-  Secondly, arrays provide a contiguous block of memory, ensuring efficient memory utilization. This characteristic is crucial when dealing with large vectors, as it allows for efficient storage and retrieval of vector elements.

-  Thirdly, the array-based approach simplifies the implementation of vector operations. Operations such as adding or removing elements from the vector can be achieved through straightforward array manipulations, such as appending or deleting elements at specific indices. Additionally, arithmetic operations on vector elements, such as vector addition or scalar multiplication, can be efficiently performed using array arithmetic.

Choosing the array-based data structure for implementing the puzzle vector offers simplicity, efficiency, and flexibility. The direct indexing, efficient memory utilization, and ease of implementing vector operations make it a suitable choice. Furthermore, the array-based approach provides a clear representation of the vector structure and allows for straightforward manipulation of vector elements.

This is an implementetion of the described data structure in JavaScript.

```c
class Vector {
   constructor() {
      this.items = []
   }

   get length() {
      return this.items.length
   }
   // k: index
   select(k) {
      return this.items[k]
   }
   // o: value, k: index
   store(o, k) {
      this.items[k] = o
   }
   // k: index
   removeAt(k) {
      this.items.splice(k, 1)
   }
   // o: value, k: index
   insertAt(o, k) {
      this.items.splice(k, 0, o)
   }
}
```

## Task 8

The function **makeSolution** will take the four-element vector row as input, which is the same input for the function MakeVector. The function should return a solved Pseudoku puzzle such that all column and sub-grid Pseudoku conditions are satisfied. The function will generate a vector using MakeVector(row ), then try cyclic permutations on this vector using PermuteRow(puzzle, x, y, z) until a set of permutations is found such that all Pseudoku conditions are satisfied (checked using CheckGrids and ColCheck).

```c
function makeSolution(row)
   // create puzzle without permuted rows
   vector <- makeVector(row)
   // permute rows and find which permutation solves the puzzle
   permutations = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
   ]

   for (0 <= i <= LENGTH(permutations) - 1) do
      puzzle = permuteRows(
         vector,
         permutations[i][0],
         permutations[i][1],
         permutations[i][2]
      )
      // check columns and grids
      columns <- colChecks(puzzle)
      grids <- checkGrids(puzzle)

      if (columns AND grids) then
         return puzzle
      end if
   end for

   return 'No solution found.'
end function
```

## Task 9

Describe a method for setting values to be blank characters in the elements of the output of MakeSolution. You can describe the method in words, use pseudocode, or use a flowchart. The method should take the number n as an input parameter and set n values to be blank characters.

The **setBlankValues** function allows for the setting of values as blank characters in a puzzle. By specifying the number of values to be set as blanks, the function randomly selects positions in the puzzle and replaces non-blank values with blanks. The process continues until the desired count is reached. The function ensures randomness by utilizing random row and column indices within the puzzle's dimensions. Upon reaching the target count, the modified puzzle is returned.

Alternative approaches to setting values as blanks include iterating through the puzzle and randomly selecting positions until the desired count, shuffling the puzzle's values and choosing the first n as blanks, or employing a backtracking algorithm that randomly designates positions as blanks during puzzle-solving. The selection of the method depends on factors like randomness, efficiency, and specific requirements.

Here is an implementation of the function:

```c
function setBlankValues(puzzle, n)
   count <- 0

   while (count < n) do
      // select random row and column
      i <- random number between 0 and 3 (inclusive)
      j <- random number between 0 and 3 (inclusive)

      if (puzzle.select(i).select(j) != ' ') then
         // set value to blank
         puzzle.select(i).store(' ', j)
         count++
      end if
   end while

   return puzzle
end function
```

## Task 10

To address the limitation mentioned in Task 10, where rows in the puzzles are not limited to cyclic permutations of the initial row, we can modify the algorithm as follows:

Define the Problem: The objective is to modify the existing algorithm to handle puzzles that may have rows which are not cyclic permutations of the initial row.

Identify Non-Cyclic Rows: First, we need to identify the rows in the puzzle that are not cyclic permutations of the initial row. We can accomplish this by comparing each row to the initial row and flagging any rows that do not match.

Adjust Row Permutations: For the flagged rows, we need to determine the correct cyclic permutation and adjust the rows accordingly. One approach is to use pattern recognition techniques to find similarities between the rows and identify the correct cyclic permutation that aligns with the initial row. This could involve analyzing the patterns, rearranging the rows, or applying transformations until a match is found.

Solve Puzzle Iteratively: Once the rows have been adjusted, we can proceed with the existing algorithm to solve the modified puzzle. The modified rows should be treated as part of the puzzle and included in the solving process.

Handle Multiple Non-Cyclic Rows: In some cases, there may be multiple rows in the puzzle that are not cyclic permutations of the initial row. To handle this situation, we can iterate through each non-cyclic row one by one, adjusting them as described in step 3. This iterative process continues until all non-cyclic rows have been adjusted and aligned with the initial row.

Track Modifications: It is crucial to keep track of the modifications made to the puzzle, especially for reporting or analysis purposes. This can be done by maintaining a record of the original row positions and the adjustments made to align the rows with the initial row.

By implementing these modifications, we can overcome the limitation of the original algorithm and handle puzzles that have rows not restricted to cyclic permutations of the initial row. The adjusted rows will be properly aligned, allowing the algorithm to solve the modified puzzle accurately.

Note: The above approach provides a general framework for addressing the limitation, but the specific implementation details may vary depending on the nature of the puzzles and the available data or algorithms.
