import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomMap from "../components/CustomMap";
import BottomNavbar from "../components/BottomNavbar";

export default function MapPage() {
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 40.424925486930064,
    longitude: -86.91358246116509,
  });
  const [buildingData, setBuildingData] = useState(null);
  const [highlightedBuildings, setHighlightedBuildings] = useState([]);

  // dummy ID
  const buildingId = "673400991a2d8e0fbcc020f5";

  const fetchBuildings = async () => {
    try {
      const response = await fetch(`http://10.186.22.4:5128/api/Building/`, {
        method: "GET",
      });

      // Check if the response is successful (status code 200)
      if (!response.ok) {
        throw new Error(`Failed to fetch buildings: ${response.statusText}`);
      }

      const buildings = await response.json();
      // console.log("Buildings:", buildings); // Add this to inspect the building data

      // If there are no buildings, log and return early
      if (!buildings || buildings.length === 0) {
        console.warn("No buildings found");
        return;
      }

      // For each building, fetch the outline
      const outlines = await Promise.all(
        buildings.map(async (building) => {
          const outlineResponse = await fetch(
            `http://10.186.22.4:5128/api/Building/outline?id=${building.id}&radius=0.0001`
          );
          const outlineData = await outlineResponse.json();

          // Assuming outlineData.coordinates contains objects like { latitude: X, longitude: Y }
          // outlineData.forEach((item, index) => {
          //   console.log(`Coordinates at index ${index}:`, item);
          // });

          if (!outlineData || outlineData.length === 0) {
            console.warn(`No outline data found for building ${building.id}`);
            return null; // Skip this building if no outline data is found
          }

          // Extract the coordinates from the structure (assuming { latitude, longitude })
          const coordinates = outlineData.coordinates.map((coord) => ({
            latitude: coord.latitude, // If the object contains `latitude` and `longitude`
            longitude: coord.longitude,
          }));

          return {
            id: building.id,
            coordinates: coordinates,
          };
        })
      );

      // const outlines = await Promise.all(
      //   buildings.map(async (building) => {
      //     const outlineResponse = await fetch(
      //       `http://10.186.22.4:5128/api/Building/outline?id=${building.id}&radius=0.0001`,
      //       {
      //         method: "GET",
      //       }
      //     );

      //     // Check if the outline response is successful
      //     if (!outlineResponse.ok) {
      //       throw new Error(
      //         `Failed to fetch outline for building ${building.id}`
      //       );
      //     }

      //     const outlineData = await outlineResponse.json();

      //     // Check if outline data is valid
      //     if (!outlineData || outlineData.length === 0) {
      //       console.warn(`No outline data found for building ${building.id}`);
      //       return null; // Skip this building if no outline data is found
      //     }

      //     // console.log("Outline data for building", building.id, outlineData); // Log outline data
      //     // outlineData.forEach((buildingOutline) => {
      //     //   console.log("Coordinates for building", buildingOutline.buildingID);
      //     //   buildingOutline.coordinates.forEach((coord, index) => {
      //     //     console.log(
      //     //       `Coordinate ${index}: Latitude = ${coord.latitude}, Longitude = ${coord.longitude}`
      //     //     );
      //     //   });
      //     // });
      //     return {
      //       id: building.id,
      //       coordinates: outlineData.map((coord) => ({
      //         latitude: coord.latitude,
      //         longitude: coord.longitude,
      //       })),
      //     };
      //   })
      // );

      // Filter out any buildings that did not have valid outline data

      const validOutlines = outlines.filter((outline) => outline !== null);

      // Set the polygons state with the fetched outlines
      // console.log(validOutlines);
      setHighlightedBuildings(validOutlines);
    } catch (error) {
      console.error("Error fetching building data:", error);
    }
  };

  // Use useEffect to call the fetchBuildings function when the component mounts
  useEffect(() => {
    fetchBuildings();
  }, []);

  const handleBuildingPress = (building) => {
    setBuildingData(building); // Set building data on polygon press
  };

  const handleClosePopup = () => {
    setBuildingData(null);
  };

  return (
    <View style={styles.container}>
      <CustomMap
        markerPosition={markerPosition}
        onMapPress={(coordinate) => setMarkerPosition(coordinate)} // Simply update marker position
        // onMapPress={handleMapPress}
        highlightedBuildings={highlightedBuildings} // Pass the polygons to the CustomMap
        onBuildingPress={handleBuildingPress}
      />
      {buildingData && (
        <View style={styles.popup}>
          <TouchableOpacity
            onPress={handleClosePopup}
            style={styles.closeButton}
          >
            <Text style={styles.closeText}>x</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.buildingName}>{buildingData.id}</Text>
            <Text style={styles.buildingAddress}>Coordinates:</Text>
            {/* {buildingData.coordinates.map((coord, index) => (
              <Text key={index} style={styles.coordinateText}>
                Lat: {coord.latitude}, Lng: {coord.longitude}
              </Text>
            ))} */}
          </View>
        </View>
      )}
      <BottomNavbar />
    </View>
  );
}

// const highlightedBuildings = [
//   {
//     name: "Hillenbrand Hall",
//     coordinates: [
//       {
//         latitude: 40.4268661,
//         longitude: -86.9268482,
//       },
//       {
//         latitude: 40.4268922,
//         longitude: -86.926847,
//       },
//       {
//         latitude: 40.4271985,
//         longitude: -86.9268469,
//       },
//       {
//         latitude: 40.427198,
//         longitude: -86.9268998,
//       },
//       {
//         latitude: 40.4272103,
//         longitude: -86.9269002,
//       },
//       {
//         latitude: 40.4272246,
//         longitude: -86.9268999,
//       },
//       {
//         latitude: 40.4272247,
//         longitude: -86.9270289,
//       },
//       {
//         latitude: 40.4271786,
//         longitude: -86.9270291,
//       },
//       {
//         latitude: 40.4271683,
//         longitude: -86.9270291,
//       },
//       {
//         latitude: 40.4269596,
//         longitude: -86.9270298,
//       },
//       {
//         latitude: 40.4269438,
//         longitude: -86.9270481,
//       },
//       {
//         latitude: 40.4269446,
//         longitude: -86.9273581,
//       },
//       {
//         latitude: 40.4269072,
//         longitude: -86.9273582,
//       },
//       {
//         latitude: 40.4269073,
//         longitude: -86.9273748,
//       },
//       {
//         latitude: 40.4269073,
//         longitude: -86.9273913,
//       },
//       {
//         latitude: 40.426808,
//         longitude: -86.9273917,
//       },
//       {
//         latitude: 40.4268079,
//         longitude: -86.9273378,
//       },
//       {
//         latitude: 40.426807,
//         longitude: -86.9269673,
//       },
//       {
//         latitude: 40.4268069,
//         longitude: -86.9269267,
//       },
//       {
//         latitude: 40.4267913,
//         longitude: -86.9269268,
//       },
//       {
//         latitude: 40.4267762,
//         longitude: -86.9269269,
//       },
//       {
//         latitude: 40.4267564,
//         longitude: -86.9269269,
//       },
//       {
//         latitude: 40.4264141,
//         longitude: -86.9273749,
//       },
//       {
//         latitude: 40.4263705,
//         longitude: -86.9273175,
//       },
//       {
//         latitude: 40.4263388,
//         longitude: -86.9272757,
//       },
//       {
//         latitude: 40.4263311,
//         longitude: -86.9272858,
//       },
//       {
//         latitude: 40.4262926,
//         longitude: -86.927235,
//       },
//       {
//         latitude: 40.4262455,
//         longitude: -86.9271729,
//       },
//       {
//         latitude: 40.4263056,
//         longitude: -86.9270943,
//       },
//       {
//         latitude: 40.426231,
//         longitude: -86.9269959,
//       },
//       {
//         latitude: 40.4262408,
//         longitude: -86.9269831,
//       },
//       {
//         latitude: 40.4262216,
//         longitude: -86.9269579,
//       },
//       {
//         latitude: 40.42622,
//         longitude: -86.9268825,
//       },
//       {
//         latitude: 40.4262596,
//         longitude: -86.9268246,
//       },
//       {
//         latitude: 40.4263232,
//         longitude: -86.9268268,
//       },
//       {
//         latitude: 40.4263421,
//         longitude: -86.926851,
//       },
//       {
//         latitude: 40.4265186,
//         longitude: -86.9266136,
//       },
//       {
//         latitude: 40.4265187,
//         longitude: -86.9265901,
//       },
//       {
//         latitude: 40.4265187,
//         longitude: -86.9265749,
//       },
//       {
//         latitude: 40.4265188,
//         longitude: -86.926548,
//       },
//       {
//         latitude: 40.4264883,
//         longitude: -86.9265479,
//       },
//       {
//         latitude: 40.4262606,
//         longitude: -86.9265468,
//       },
//       {
//         latitude: 40.4262064,
//         longitude: -86.9265466,
//       },
//       {
//         latitude: 40.4261645,
//         longitude: -86.9265464,
//       },
//       {
//         latitude: 40.4261649,
//         longitude: -86.9264197,
//       },
//       {
//         latitude: 40.4261764,
//         longitude: -86.9264197,
//       },
//       {
//         latitude: 40.4261873,
//         longitude: -86.9264198,
//       },
//       {
//         latitude: 40.4261874,
//         longitude: -86.9263737,
//       },
//       {
//         latitude: 40.4262606,
//         longitude: -86.926374,
//       },
//       {
//         latitude: 40.4264247,
//         longitude: -86.9263748,
//       },
//       {
//         latitude: 40.4264406,
//         longitude: -86.9263535,
//       },
//       {
//         latitude: 40.4264408,
//         longitude: -86.9261676,
//       },
//       {
//         latitude: 40.4264409,
//         longitude: -86.926066,
//       },
//       {
//         latitude: 40.426441,
//         longitude: -86.9260041,
//       },
//       {
//         latitude: 40.4265403,
//         longitude: -86.9260043,
//       },
//       {
//         latitude: 40.4265403,
//         longitude: -86.9260266,
//       },
//       {
//         latitude: 40.4265403,
//         longitude: -86.9260439,
//       },
//       {
//         latitude: 40.4265782,
//         longitude: -86.926044,
//       },
//       {
//         latitude: 40.4265781,
//         longitude: -86.9261668,
//       },
//       {
//         latitude: 40.4265778,
//         longitude: -86.9264374,
//       },
//       {
//         latitude: 40.4265778,
//         longitude: -86.9264744,
//       },
//       {
//         latitude: 40.4266291,
//         longitude: -86.9264745,
//       },
//       {
//         latitude: 40.4266857,
//         longitude: -86.9265503,
//       },
//       {
//         latitude: 40.4266944,
//         longitude: -86.9265391,
//       },
//       {
//         latitude: 40.4266957,
//         longitude: -86.9263948,
//       },
//       {
//         latitude: 40.4266958,
//         longitude: -86.9263844,
//       },
//       {
//         latitude: 40.426689,
//         longitude: -86.9263771,
//       },
//       {
//         latitude: 40.4266916,
//         longitude: -86.9262982,
//       },
//       {
//         latitude: 40.4267318,
//         longitude: -86.9262419,
//       },
//       {
//         latitude: 40.4267941,
//         longitude: -86.9262432,
//       },
//       {
//         latitude: 40.4268162,
//         longitude: -86.9262732,
//       },
//       {
//         latitude: 40.4268299,
//         longitude: -86.926273,
//       },
//       {
//         latitude: 40.426865,
//         longitude: -86.9262726,
//       },
//       {
//         latitude: 40.4269057,
//         longitude: -86.9262721,
//       },
//       {
//         latitude: 40.4269169,
//         longitude: -86.926272,
//       },
//       {
//         latitude: 40.4269409,
//         longitude: -86.9262411,
//       },
//       {
//         latitude: 40.4270001,
//         longitude: -86.9262414,
//       },
//       {
//         latitude: 40.4270415,
//         longitude: -86.9262973,
//       },
//       {
//         latitude: 40.4270422,
//         longitude: -86.926375,
//       },
//       {
//         latitude: 40.4270204,
//         longitude: -86.9264029,
//       },
//       {
//         latitude: 40.4270204,
//         longitude: -86.9264244,
//       },
//       {
//         latitude: 40.4270206,
//         longitude: -86.926475,
//       },
//       {
//         latitude: 40.4270207,
//         longitude: -86.9265233,
//       },
//       {
//         latitude: 40.4270208,
//         longitude: -86.9265414,
//       },
//       {
//         latitude: 40.4270425,
//         longitude: -86.9265713,
//       },
//       {
//         latitude: 40.4270438,
//         longitude: -86.9266476,
//       },
//       {
//         latitude: 40.4269982,
//         longitude: -86.926703,
//       },
//       {
//         latitude: 40.4269399,
//         longitude: -86.9267038,
//       },
//       {
//         latitude: 40.4269347,
//         longitude: -86.9266974,
//       },
//       {
//         latitude: 40.4269194,
//         longitude: -86.9266973,
//       },
//       {
//         latitude: 40.4268157,
//         longitude: -86.9266964,
//       },
//       {
//         latitude: 40.4268068,
//         longitude: -86.926708,
//       },
//       {
//         latitude: 40.4268652,
//         longitude: -86.9267852,
//       },
//       {
//         latitude: 40.4268661,
//         longitude: -86.9268482,
//       },
//     ],
//   },

//   {
//     name: "Residence Hall B",
//     coordinates: [
//       { latitude: 40.422, longitude: -86.912 },
//       { latitude: 40.423, longitude: -86.912 },
//       { latitude: 40.423, longitude: -86.911 },
//       { latitude: 40.422, longitude: -86.911 },
//     ],
//   },
// ];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  popup: {
    position: "absolute",
    bottom: 16,
    left: "50%",
    transform: [{ translateX: -150 }],
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: 300,
  },
  closeButton: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  closeText: {
    color: "#EF4444", // Equivalent to text-red-500
    fontSize: 18,
    fontWeight: "bold",
  },
  buildingName: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  buildingAddress: {
    color: "black",
    fontSize: 16,
  },
});
