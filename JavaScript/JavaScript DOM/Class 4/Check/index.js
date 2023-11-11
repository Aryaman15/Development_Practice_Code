let people={
    character:'good',
    financial:'not_good',

    get info(){
        return `${people.character} ${people.financial}`;
    },

    name(value)
    {
        if(typeof(value)!=String)
        {
            throw new Error("not a string");
        }
        let part=value.split(' ');
        this.character=part[0];
        this.financial=part[1];
    }
};

console.log(people.info);


try
{
people.name='good good';

}
catch(e)
{
console.log(e);
}

console.log(people.name);