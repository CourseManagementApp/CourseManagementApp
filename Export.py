import pandas as pd
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Initialize the Firebase Admin SDK with a service account key
cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# Read the Excel file into a pandas DataFrame
df = pd.read_excel('path/to/excel/file.xlsx')

# Iterate over each row in the DataFrame and create a document for each row in the Firebase collection
for index, row in df.iterrows():
    doc_ref = db.collection('myCollection').document()
    doc_ref.set(row.to_dict())
