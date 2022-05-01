from django.shortcuts import render
#from transformers import RobertaTokenizer, RobertaForSequenceClassification, RobertaConfig
from rest_framework.response import Response
from rest_framework.views import APIView
from counterinfer.apps import CounterinferConfig
import numpy as np


#@method_decorator(csrf_exempt, name='dispatch')
class Roberta_Predict(APIView):
    

    def post(self, request, format=None):
        predictions=[]
        data = request.data
        keys = []
        values = []
        for key in data:
            keys.append(key)
            values.append(data[key])
        loaded_model = CounterinferConfig.model
        encoded_input = CounterinferConfig.tokenizer(values, return_tensors='pt')
        output = loaded_model(**encoded_input)
        predictions.append(output.logits.argmax(1))
        flat_predictions = np.concatenate(predictions, axis=0)
        if flat_predictions == 1:
            answer= "This is a Counterfactual!"
        else: 
            answer= "This is not a Counterfactual!"
        return Response(answer, status=200)    
