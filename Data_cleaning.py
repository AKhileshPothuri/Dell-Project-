import pandas as pd
import os
import collections






os.chdir("/Users/rithviksallaram/Desktop")
product_ids=[214509013,214508942,214510044,214510854,214512416,214509133,214509135,214512152,214511092,214511375]
bought_per_session =pd.read_csv('Click_data1.csv',usecols=['Session_ID'], delimiter =',')
Data=pd.read_csv('hackybranch.csv',delimiter =',')

Data.drop_duplicates(inplace=True)

Data.drop(['Timestamp_x', 'Item_ID', 'Category','Bought_per_product'], axis=1,inplace=True)

dictionary=collections.Counter(bought_per_session['Session_ID'].values)
print(dictionary)
export_csv = Data.to_csv ("/Users/rithviksallaram/Desktop/Universal_data1.csv", index = None, header=True)
new_dataframe = pd.DataFrame(list(dictionary.items()),columns=['Session_ID','Click_count'])
df_all = Data.merge(new_dataframe.drop_duplicates(), on=['Session_ID'],how='left', indicator=True)

print(new_dataframe.head())

df_filtered = Data.loc[Data['Bought_per_session']==1][['Session_ID','Bought_per_session']]
Data['Bought_per_session'] = Data.merge(df_filtered, on='Session_ID').Bought_per_session_y
print(Data.head())
Data['Bought_per_session'] = Data.fillna('').sort_values(['Session_ID','Bought_per_product']).groupby('Session_ID')['Bought_per_session'].transform('last')
listy = bought_per_session['Session_ID'].unique()
print(listy)

dataframe= Data.reset_index().drop_duplicates(subset=['Session_ID','Timestamp_x','Item_ID'],
                                       keep='first').set_index('index')
print(len(Data))

Data['unique'] = Data['Session_ID'].map(Data.groupby('Session_ID'))


Data['Unique_products'] = Data['Session_ID'].map(Data[Data['Session_ID']>0].groupby('Session_ID')['Item_ID'].nunique()).fillna(0)

print(Data)
print(Data)

#df['D'] = df['A'].map(df[df['C']>2].groupby('A')['B'].nunique()).fillna(0)

Data.drop(['Timestamp_y', 'price', 'Quantity'], axis=1,inplace=True)
Data['_merge'] = (Data['_merge'] == 'both').astype(int)
print(len(Data))
export_csv = Data.to_csv ("/Users/rithviksallaram/Desktop/hack_final.csv", index = None, header=True)

def is_bought(Session_ID,Timestamp,item_ID,dataframe):
    if (((dataframe['Session_ID'] == Session_ID) & (dataframe['Timestamp'] == Timestamp) & (dataframe['Item_ID'] == item_ID)).any()):
        return 1
    return 0

for i, row in bought_indicator_universal.iterrows():
    print(i)
    Session_id=row['Session_ID']
    Timestamp=row['Timestamp']
    item_id=row['Item_ID']
    bought =is_bought(Session_id,Timestamp,item_id,universal_buy)
    bought_indicator_universal.at[i, 'Bought'] = bought
