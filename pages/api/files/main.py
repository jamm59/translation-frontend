import csv 
import json 
import os

def csv_to_json(csvFilePath, jsonFilePath):
    jsonArray = []
    print(os.listdir())
    #read csv file
    with open(csvFilePath, encoding='utf-8') as csvf: 
        #load csv file data using csv library's dictionary reader
        csvReader = csv.DictReader(csvf) 

        #convert each csv row into python dict
        for row in csvReader: 
            #add this python dict to json array
            jsonArray.append(row)
  
    #convert python jsonArray to JSON String and write to file
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf: 
        jsonString = json.dumps(jsonArray, indent=4)
        jsonf.write(jsonString)
          
csvFilePath = r'chat_dataset.csv'
jsonFilePath = r'chat.json'
csv_to_json(csvFilePath, jsonFilePath)