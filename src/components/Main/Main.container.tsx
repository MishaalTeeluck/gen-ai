import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { ToolLink, ToolsDetails } from './Main.interface';
import { useDispatch, useSelector } from 'react-redux';
import { setHeaderTitle } from '../../store/headerSlice';
import { RootState } from '../../store';
import axios from 'axios';

export const MainContainer = () => {
  const [tools, setTools] = useState<ToolLink[]>([]);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.header.token);

  const searchValue = useSelector(
    (state: RootState) => state.header.searchValue
  );

  const filteredTools = tools.filter((tool) =>
    (tool.toolDetail.name + tool.toolDetail.description)
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );

  const fetchToolsDetails = async () => {
    try {
      if (!token) {
        toast.error('Error while getting user details');
        setLoading(false);
        return;
      }

      const response = await axios.get<ToolsDetails[]>(
        `${import.meta.env.VITE_APIPORT}/tools/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      const toolLinks: ToolLink[] = data.map((tool) => ({
        toolDetail: tool,
        routeLocation: tool.available ? `/tools/${tool.id}/uploadfile` : '',
      }));

      setTools(toolLinks);
    } catch {
      toast.error('Error occurred while fetching Tools list');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    dispatch(setHeaderTitle(''));
    fetchToolsDetails();
  });

  return {
    searchValue,
    loading,
    filteredTools,
  };
};
