// import React, { useState } from 'react';
// import { CSVReader } from 'react-papaparse';
// import { Button, Card, CardContent, Typography } from '@material-ui/core';

// const FileDropAndConverter = () => {
//   const [csvData, setCsvData] = useState(null);

//   const handleOnDrop = (data) => {
//     setCsvData(data);
//   };

//   const handleOnError = (err) => {
//     console.error(err);
//   };

//   const handleOnRemoveFile = () => {
//     setCsvData(null);
//   };

//   const convertToJSON = () => {
//     const jsonData = csvData.map((row) => {
//       const obj = {};
//       row.data.forEach((value, i) => {
//         obj[csvData[0].data[i]] = value;
//       });
//       return obj;
//     });
//     console.log(jsonData);
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5" component="h2">
//           File Drop and Converter
//         </Typography>
//         {csvData ? (
//           <div>
//             <Typography variant="body1" component="p">
//               File selected: {csvData[0].name}
//             </Typography>
//             <Button onClick={convertToJSON} variant="contained" color="primary">
//               Convert to JSON
//             </Button>
//             <Button onClick={handleOnRemoveFile} variant="contained">
//               Remove File
//             </Button>
//           </div>
//         ) : (
//           <CSVReader onDrop={handleOnDrop} onError={handleOnError}>
//             <span>Drag and drop a CSV file here or click to select</span>
//           </CSVReader>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default FileDropAndConverter;


import React, { useState, CSSProperties } from 'react';

import {
  useCSVReader,
  lightenDarkenColor,
  formatFileSize,
} from 'react-papaparse';

const GREY = '#CCC';
const GREY_LIGHT = 'rgba(255, 255, 255, 0.4)';
const DEFAULT_REMOVE_HOVER_COLOR = '#A01919';
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(
  DEFAULT_REMOVE_HOVER_COLOR,
  40
);
const GREY_DIM = '#686868';

const styles = {
  zone: {
    alignItems: 'center',
    border: `2px dashed ${GREY}`,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: 20,
  } ,
  file: {
    background: 'linear-gradient(to bottom, #EEE, #DDD)',
    borderRadius: 20,
    display: 'flex',
    height: 120,
    width: 120,
    position: 'relative',
    zIndex: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  } ,
  info: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
  } ,
  size: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    marginBottom: '0.5em',
    justifyContent: 'center',
    display: 'flex',
  } ,
  name: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    fontSize: 12,
    marginBottom: '0.5em',
  } ,
  progressBar: {
    bottom: 14,
    position: 'absolute',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  } ,
  zoneHover: {
    borderColor: GREY_DIM,
  } ,
  default: {
    borderColor: GREY,
  } ,
  remove: {
    height: 23,
    position: 'absolute',
    right: 6,
    top: 6,
    width: 23,
  } ,
};

export default function CSVReader() {
  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);
  const [removeHoverColor, setRemoveHoverColor] = useState(
    DEFAULT_REMOVE_HOVER_COLOR
  );

  return (
    <CSVReader
      onUploadAccepted={(results) => {
        console.log('---------------------------');
        console.log(results);
        console.log('---------------------------');
        setZoneHover(false);
      }}
      onDragOver={(event) => {
        event.preventDefault();
        setZoneHover(true);
      }}
      onDragLeave={(event) => {
        event.preventDefault();
        setZoneHover(false);
      }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
        Remove,
      }) => (
        <>
          <div
            {...getRootProps()}
            style={Object.assign(
              {},
              styles.zone,
              zoneHover && styles.zoneHover
            )}
          >
            {acceptedFile ? (
              <>
                <div style={styles.file}>
                  <div style={styles.info}>
                    <span style={styles.size}>
                      {formatFileSize(acceptedFile.size)}
                    </span>
                    <span style={styles.name}>{acceptedFile.name}</span>
                  </div>
                  <div style={styles.progressBar}>
                    <ProgressBar />
                  </div>
                  <div
                    {...getRemoveFileProps()}
                    style={styles.remove}
                    onMouseOver={(event) => {
                      event.preventDefault();
                      setRemoveHoverColor(REMOVE_HOVER_COLOR_LIGHT);
                    }}
                    onMouseOut={(event) => {
                      event.preventDefault();
                      setRemoveHoverColor(DEFAULT_REMOVE_HOVER_COLOR);
                    }}
                  >
                    <Remove color={removeHoverColor} />
                  </div>
                </div>
              </>
            ) : (
              'Drop CSV file here or click to upload'
            )}
          </div>
        </>
      )}
    </CSVReader>
  );
}