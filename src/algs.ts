import algos from "./algorithms.json"


export class Algorithms 
{
    getPll(inputPll:string)
    {
        for (let i = 0; i < algos.plls.length; i++)
        {
            if (algos.plls[i].name == inputPll)
            {
                return algos.plls[i].algo
            }
        }
        throw new Error("Pll not found");
    }

    getOll(inputOll:string)
    {
        for (let i = 0; i < algos.olls.length; i++)
        {
            if (algos.olls[i].name == inputOll)
            {
                return algos.plls[i].algo
            }
        }
        throw new Error("Oll not found");

    }

    listPlls()
    {
        let list = ""
        for (let i = 0; i < algos.plls.length; i++)
        {
            let index = (i).toLocaleString
            ('en-US', 
            {
                minimumIntegerDigits: 2,
                useGrouping: false
            }
            )            
            list += `[${index}] ${algos.plls[i].name}\n`
        }
        return list
    }

    listOlls()
    {
        let list = ""
        for (let i = 0; i < algos.olls.length; i++)
        {
            let index = (i).toLocaleString
            ('en-US', 
            {
                minimumIntegerDigits: 2,
                useGrouping: false
            }
            )
            list += `[${index}] ${algos.olls[i].name}\n`
        }
        return list
    }
}