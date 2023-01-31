# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I have changed event name to inputKey as it is more readable to user, it can be either a string, an integer value or a dictionary so defining the name with data type does not seems good to me. Since, this function basically allow us to deterministically divide the key based on input type and its structure, the variable name of candidate has to be more meaningful than candidate, because candidate just shows the key we are getting as result from this function will be a candidate to use in some other function. So, I have changed the candidate name to finalPartitionedKey, this gives more meaningful insight that after inputKey is processed it returns a final partintioned key as a result. The ouput of this function can be a string or hash value.
