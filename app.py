from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

tasks = []

@app.route('/')
def index():
    return render_template('index.html', tasks=tasks)

@app.route('/add', methods=['POST'])
def add():
    data = request.get_json()
    task = data.get('task', '').strip()
    if task:
        tasks.append(task)
        return jsonify({'success': True, 'task':
task, 'index': len(tasks) - 1})
    return jsonify({'success': False, 'error': 'Task cannot be empty'}), 400

@app.route('/delete/<int:index>', methods=['DELETE'])
def delete(index):
    if 0 <= index < len(tasks):
        tasks.pop(index)
        return jsonify({'success': True})
    return jsonify({'success': False}), 404


if __name__ == '__main__':
    app.run(debug=True)