### 02 Good Vs Evil

Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. 

On the good side we have the following races with their associated worth

Hobbits - 1
Men - 2
Elves - 3
Dwarves - 3
Eagles - 4
Wizards - 10

on the evil side

Orcs - 1
Men - 2
Wargs - 2
Goblins - 2
Uruk Hai - 3
Trolls - 5
Wizards - 10

Whichever side has the most worth will win the battle.

Determine which side has the most worth depending on the count of their respective races.

#### Input:

The function will be given two parameters. Each parameter will be a string with counts separated by spaces.

The first parameter will be the counts of the good side in this order..

 - Hobbits, Men, Elves, Dwarves, Eagles, Wizards

The second parameter will be the counts of the evil side in this order..
 
 - Orcs, Men, Wargs, Goblins, Urak Hai, Trolls, Wizards
 
All values will be non-negative integers.
 
#### Output:

If good wins... Return 'Battle Result: Good triumphs over Evil' 
If evil wins... Return 'Battle Result: Evil eradicates all trace of Good'
If a draw... Return 'Battle Result: No victor on this battle field'

#### Examples

```goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1') // Return 'Battle Result: Evil eradicates all trace of Good'```

