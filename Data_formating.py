import pandas as pd
import os








os.chdir("/Users/rithviksallaram/Desktop")
product_ids=[214509013,214508942,214510044,214510854,214512416,214509133,214509135,214512152,214511092,214511375]
universal_buy =pd.read_csv('Universal_buys.csv', names=['Session_ID', 'Timestamp', 'Item_ID', 'price', 'Quantity'], header=None, delimiter =',')
universal_click =pd.read_csv('Universal_clicks.csv', names=['Session_ID', 'Timestamp', 'Item_ID', 'Category'], delimiter =',', low_memory=False)
universal_buy.sort_values("Session_ID", axis = 0, ascending = True,
                 inplace = True, na_position ='first')

df_all = universal_click.merge(universal_buy.drop_duplicates(), on=['Session_ID','Item_ID'],
                   how='left', indicator=True)

df_all = universal_click.merge(universal_buy.drop_duplicates(), on=['Session_ID','Item_ID'],
                    how='left', indicator=True)
print(df_all.head())
bought_sessions=universal_click['Session_ID'].unique()
bought_indicator_universal=universal_click
bought_indicator_universal['Bought']=0
print(bought_indicator_universal.head())
dicty={}
#Iterate over the Dataframe rows as named tuples

for i in bought_sessions:
    print(i)
print(len(bought_sessions))
processed_df=pd.read_csv('processed_data',delimiter=',')
#for namedTuple in universal_dataframe.itertuples():



product_data = universal_click[universal_click['Session_ID'].isin(bought_sessions)]
export_csv = df_all.to_csv ("/Users/rithviksallaram/Desktop/merged_universal.csv", index = None, header=True)


for tuple in universal:
    tuple_data={}
    if tuple[3] in product_ids:
        if in tuple_data:
