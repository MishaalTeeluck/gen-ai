import { useState } from 'react';
import { toast } from 'react-toastify';

export const useDropzoneHandlers = () => {
  const [, setFiles] = useState<File[]>([]);

  const handleFiles = (incomingFiles: File[]) => {
    if (incomingFiles.length > 0) {
      setFiles([incomingFiles[0]]);
    }
  };

  const handleRejection = () => {
    setFiles([]);
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
