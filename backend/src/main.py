from fastapi import FastAPI

app = FastAPI(title="POS Multi-sede API")

@app.get("/")
def read_root():
    return {"status": "ok", "message": "API corriendo"}