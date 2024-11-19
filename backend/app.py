from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.get_json()
    name = data.get('name')
    age = data.get('age')
    # File handling would typically go here
    return jsonify({"message": f"Form received! Name: {name}, Age: {age}"})

if __name__ == '__main__':
    app.run(debug=True)
