from flask import Flask, jsonify, render_template
from flask_jwt_extended import JWTManager
from config import Config
from controllers.user_controller import user_bp
from flask_cors import CORS
import pandas as pd
from sklearn.cluster import KMeans
import folium

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)
jwt = JWTManager(app)

@app.route('/clusters', methods=['GET'])
def get_clusters():
    # Load the CSV file
    df = pd.read_csv('csv/Mumbai1.csv')
    #cleanig 
    X = df[['Latitude', 'Longitude']]
    
    # Apply K-means clustering
    kmeans = KMeans(n_clusters=10, random_state=0)
    df['cluster'] = kmeans.fit_predict(X)
    
    # Define a color map for different entities
    entity_colors = {
        'Hotel,Restaurant': 'blue',
        'Tourist attraction,Garden,Park': 'green',
        'College': 'red',
        'School': 'purple',
        'Demart': 'orange',
        'Garden': 'darkgreen',
        'Gym': 'pink',
        'Hospital': 'darkred',
        'Medical': 'lightblue',
        'Restaurant': 'darkblue',
        'Vegetable_market': 'yellow'
    }

    # Create a map centered around Mumbai
    m = folium.Map(location=[df['Latitude'].mean(), df['Longitude'].mean()], zoom_start=7)

    # Add points to the map with different colors for each entity
    for idx, row in df.iterrows():
        folium.Marker(
            location=[row['Latitude'], row['Longitude']],
            popup=f"{row['Categories']} (Cluster {row['cluster']})",
            icon=folium.Icon(color=entity_colors.get(row['Categories'], 'gray'))
        ).add_to(m)

    # Save the map to the templates directory
    m.save('templates/map.html')

    return jsonify(df.to_dict(orient='records'))

@app.route('/map')
def render_map():
    return render_template('map.html')

# Register Blueprints
app.register_blueprint(user_bp)

if __name__ == '__main__':
    app.run(debug=True)
