function getObject( objString )
{
    if( objString && typeof objString === 'string' && objString !== '' )
    {
        try
        {
            return JSON.stringify(JSON.parse(objString));
        }
        catch (e)
        {
            return {};
        }
    }
    else
    {
        return {};
    }
}

module.exports = getObject;