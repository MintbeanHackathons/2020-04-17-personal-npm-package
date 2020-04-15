# Today's Objective: Conway's Game of Life

# In honour of John Conway

[John Conway](https://en.wikipedia.org/wiki/John_Horton_Conway) (1937-2020) was an English mathematician. He passed away earlier this week at the age of 82. He had many accomplishments. Among those accomplishments, the [Game of Life](https://simple.wikipedia.org/wiki/Conway%27s_Game_of_Life) is the most popularly famous. 

* [Rest in peace, John Conway.](https://xkcd.com/2293/)

## Prize

$25 CAD Amazon gift card + bragging rights.

Tip: Read the [General Information Document](General%20Information.md) for more info on how to get started and submit.

## Objective

Today's objective is to build a READ ONLY version of Conway's Game of Life.

## Requirements

Create a read-only version of the Game of Life.

### Bonus points

Bonus points will be awarded for:
* Creating a writable board
* Speed controls
* Zoom controls


### Rules for the Game of Life

(From [Wikipedia](https://simple.wikipedia.org/wiki/Conway%27s_Game_of_Life))

The game is played on a grid of squares called cells, each cell is black (alive) or white (dead). When people are playing the game, they start by making some dead cells alive. Then the alive cells can make other cells alive or dead because of the rules of the game. The rules are:

Any alive cell that is touching less than two alive neighbours dies.
Any alive cell touching four or more alive neighbours dies.
Any alive cell touching two or three alive neighbours does nothing.
Any dead cell touching exactly three alive neighbours becomes alive.

The way a player sets up the first alive cells starts the game. The first level (generation) is made by using the 4 rules. After the player is done changing the cells, they do the same thing all over again to make the next level. The game is over when all the cells are dead or all the cells are alive or the game is doing the same thing over and over. The Game of Life is Turing-complete.


### Frameworks:

Any. It is completely possible to build this using jQuery. You can use React, Vue, Angular if you wish.

### Restrictions

* Your project must use JavaScript.

There are no other restrictions.

### Tips for success:

1. The project is intentionally simple so you can focus on code quality.
1. The requirements are intentionally minimalistic so you can get as creative as you'd like.
1. You get a LOT of time for code review comments. So you can win even if you feel your project isn't great, simply on the strength of your code review comments!
1. Keep in mind, 33% of your score is based on aesthetic appeal! So try to make it look nice.

## Resources

* [Cornell's assignment page](http://pi.math.cornell.edu/~lipa/mec/lesson6.html)
* [Bitstorm's implementation](https://bitstorm.org/gameoflife/)
* [Golly, a very advanced implementation](http://golly.sourceforge.net/webapp/golly.html)

