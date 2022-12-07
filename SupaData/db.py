put = []
def save(table, items):
    for i in items:
        put.append(i) 
    result = f"""
{table}    columns
           {put}
    """
    
    return result
def get(itemNumber):
    result = put[itemNumber]
    return result
