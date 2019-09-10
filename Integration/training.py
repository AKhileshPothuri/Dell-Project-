import pandas as pd
Data=pd.read_csv('hack_final.csv')
from sklearn.preprocessing import power_transform

x=Data[['Click_count_y','Unique_products']]
power_transform(x, method='box-cox')
y=Data['y']
from sklearn.tree import DecisionTreeRegressor
regressor=DecisionTreeRegressor(random_state=0)
regressor.fit(x,y)
from sklearn.externals import joblib
joblib.dump(regressor, 'model.pkl')