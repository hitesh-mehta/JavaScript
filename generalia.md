JavaScript Execution Context(JEC)

- Whenever a JS file runs, the first step is creation of a Global EC and it is referred to as this
for browser, this = window object

- Functional EC : 
- - 1. Memory creation Phase/Memory phase: memory is allocated to variables, functions
The variables are given undefined values and the function names are given their definition.
- - 2. Execution phase: the functions and methods are executed,
Variables are given the assigned values, and functions create a new execution context! This again creates a new variable environment and execution thread. Now, the memory and execution phases are executed again for the functional EC.The result is returned to Global EC and this EC is destroyed.

> These ECs are called in stack frames.

- Eval EC : For some other frameworks, like mongoose