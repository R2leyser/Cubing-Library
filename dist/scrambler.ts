export class Scrambler
{
    //wca legal scrambeling 
    async randomState(count: number )
    {
        if (count < 100){
            console.log("[Scrambler] random state function ran")
            //api stuff to get the scrambles
            const response = 
                await fetch(`https://scramble-web-api.herokuapp.com/scramble/3x3x3?numberOfScrambles=${count}`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                    }
                });

            const result = (await response.json());

            let scrambles = ''
            
            console.log(response)

            for (let i in result['scrambles'])
            {
                scrambles += `${result['scrambles'][i]}\n`
            }

            return scrambles}
        else{
            throw new Error("Too many requests at once, reduce it to max 100 at a time")
        }
    }

    // had to move the actual scramble generation into another function for some reason
    genScramble()
    {
        const moves = ["F", "F'", "F2", 
                       "B", "B'", "B2", 
                       "R", "R'", "R2", 
                       "L", "L'", "L2", 
                       "U", "U'", "U2", 
                       "D", "D'", "D2" ] 
        let scramble = ""
        for (let i = 0; i < 10; i++) 
        {
            let index = Math.floor(Math.random() * 18);
            scramble += ` ${moves[index]}`
        }
        return scramble
    }

    //other way of scrambelling, faster if you wanna get a big list fast
    randomMoves(count: number)
    {
        console.log("[Scrambler] random moves function ran")
        let fullScramble = ""
        for (let i = 0; i < count; i++)
        {
            fullScramble += `${this.genScramble()} \n`
        }
        return fullScramble
    }   

    async scrambler(scrambleType: boolean = true, amount:number = 1)
    {
        console.log("[Scrambler] main function ran")
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