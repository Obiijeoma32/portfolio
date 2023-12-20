import fileUrl from "./cv.pdf";

const FileDownloadButton = () => {
  const downloadFile = () => {
    // Replace 'your_file_url' with the actual URL or path of the file you want to download

    // Create a link element
    const link = document.createElement("a");

    // Set the link's href to the file URL
    link.href = fileUrl;

    // Specify the file name for the download
    link.download = "downloaded_file_name";

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={downloadFile}>Download File</button>
    </div>
  );
};

export default FileDownloadButton;
