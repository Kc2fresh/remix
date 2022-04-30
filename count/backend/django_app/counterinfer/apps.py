from django.apps import AppConfig
import torch
from transformers import RobertaTokenizer, RobertaForSequenceClassification
#import joblib
import os



class CounterinferConfig(AppConfig):
    name='counterinfer'
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    MLMODEL_FOLDER = os.path.join(BASE_DIR, 'counterinfer/mlmodel/')
    MLMODEL_FILE = os.path.join(MLMODEL_FOLDER, "predict.pth" )
    model = RobertaForSequenceClassification.from_pretrained("roberta-base",num_labels=2)
    tokenizer = RobertaTokenizer.from_pretrained('roberta-base', do_lower_case=True)
    device = torch.device('cpu')
    model.load_state_dict(torch.load(MLMODEL_FILE,map_location=torch.device('cpu')))
    model.eval()
   
