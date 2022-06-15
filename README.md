# About

This is a passion project made initally to be part of a discord bot but I decided to move it into it's own thing and now here we are

# Documentation
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
```