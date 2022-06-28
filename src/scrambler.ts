export class Scrambler
{
    //wca legal scrambeling 
    async randomState(count: number )
    {
        if (count <= 100)
        {
            //api stuff to get the scrambles
            const response = 
                await fetch
                (`https://scramble-web-api.herokuapp.com/scramble/3x3x3?numberOfScrambles=${count}`, 
                {
                    method: 'GET',
                    headers: 
                    {
                        Accept: 'application/json',
                    }
                }
                );

            const result = (await response.json());

            const scrambles = []

            for (let i in result['scrambles'])
            {
                scrambles.push(result['scrambles'][i])
            }

            return scrambles
        }
        else
        {
            throw new Error("Too many requests at once, reduce it to max 100 at a time")
        }
    }

    // had to move the actual scramble generation into another function for some reason
    genScramble()
    {
        const moves = 
        [
            "F", "F'", "F2", 
            "B", "B'", "B2", 
            "R", "R'", "R2", 
            "L", "L'", "L2", 
            "U", "U'", "U2", 
            "D", "D'", "D2" 
        ] 

        var scramble = ""
        for (let i = 0; i < 10; i++) 
        {
            let index = Math.floor(Math.random() * 18);
            scramble += `${moves[index]} `
        }
        return scramble
    }

    //other way of scrambelling, faster if you wanna get a big list fast
    randomMoves(count: number)
    {
        const fullScramble = []
        for (let i = 0; i < count; i++)
        {
            fullScramble.push(this.genScramble())
        }
        return fullScramble
    }   

    async scrambler(scrambleType: boolean = true, amount:number = 1)
    {
        if (scrambleType)
        {
            //legal
            return await this.randomState(amount)
        } 
        else
        {
            //illegal
            return this.randomMoves(amount)
        }        
    }
}