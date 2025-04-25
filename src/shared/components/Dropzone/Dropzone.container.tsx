import { toast } from "react-toastify";

export const useDropzoneHandlers = (setUploadedFile: React.Dispatch<React.SetStateAction<File | null>>) => {
  const handleFiles = (incomingFiles: File[]) => {
    if (incomingFiles.length > 0) {
      setUploadedFile(incomingFiles[0]);
    }
  };

  const handleRejection = () => {
    setUploadedFile(null);
    toast.error(
      'Invalid file type. Only PDF, Word, or Text files are allowed.',
      {
        autoClose: 2000,
      }
    );
  };

  return {
    handleFiles,
    handleRejection,
  };
};