# Hashtables
add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
get: takes in the key and returns the value from the table.
contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
hash: takes in an arbitrary key and returns an index in the collection.


## Approach & Efficiency
space --> O(1)
## API
#### LinkedList
-add(value) - Adds a node to the linked list
- read(key) - Returns value of key

#### Hash Table
- hash(key) - Hashes key and returns hashed value
- add(key, value) - Adds key/value pair to hash table
- get(key) - Returns value of key
- contains(key) - Returns boolean if hash table contains key