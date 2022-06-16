# About

This is a project made initally to be part of a discord bot but I decided to move it into it's own thing and now here we are

**This is very much work in progress still**

# Documentation (idk if this can be considered one but yeah)
```
this module contains:
- A scrambler, make WCA (World Cube Association) legal scrambles, illegal but faster scrambles and a funtion that does both
-----------------------------------------------------------------------------------------
illegal:
Scrambler.randomState(<amount>) 
    - amount (Number) decides how many scrambles you want bundled

legal:
Scrambler.randomMoves(<amount>)
    - amount (Number) decides how many scrambles you want bundled

Scrambler.scrambler(<scrambleType>, <amount>)
    - scrambleType (Boolean) decides between randomState (true) and randomMoves (false)
    - amount (Number) decides how many scrambles you want bundled
-----------------------------------------------------------------------------------------

- Alrithm module, get OLL and PLL algorithms and list them
-----------------------------------------------------------------------------------------
Algorithms.getPll(<pll>)
    - pll (string) is the name of the pll you want to get   

Algorithms.getOll(<oll>)
    - oll (string) is the name of the oll you want to get

Algorithms.listPlls()

Algorithms.listOlls()
-----------------------------------------------------------------------------------------

```
