import  pandas  as pd
import json

df=pd.read_excel('xinxi.xlsx')
result = []


file_write_obj = open("doctors.js", 'w')
file_write_obj.writelines("export const doctors = ")


for i in range(0,40):
    data=df.ix[i].values
    result.append({"name": data[1],
                   "intro": "介绍",
                   "tags": data[3],
                   "staffId": data[5],
                   "supportURL": data[6]})
file_write_obj.write(json.dumps(result, ensure_ascii=False))
file_write_obj.close()

