import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { ToolLink, ToolsDetails } from './Main.interface';
import { genAITools, routeMap } from './Main.constants';
import { useDispatch, useSelector } from 'react-redux';
import { setHeaderTitle } from '../../store/headerSlice';
import { RootState } from '../../store';

export const MainContainer = () => {
  const [tools, setTools] = useState<ToolLink[]>([]);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);
  const dispatch = useDispatch();

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
      const response = await fetch(`${import.meta.env.VITE_APIPORT}/getTools`);
      if (!response.ok) {
        toast.error('Error while loading Gen AI Tools');
        return;
      }

      const data: ToolsDetails[] = await response.json();
      const toolLinks: ToolLink[] = data.map((tool) => ({
        toolDetail: tool,
        routeLocation: tool.status ? routeMap[tool.name] ?? '' : '',
      }));

      setTools(toolLinks);
    } catch {
      const toolLinks: ToolLink[] = genAITools.map((tool) => ({
        toolDetail: tool,
        routeLocation: tool.status ? routeMap[tool.name] ?? '' : '',
      }));

      setTools(toolLinks);

      toast.error('Error occured while fetching Tools list');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    dispatch(setHeaderTitle(''));
    fetchToolsDetails();
  }, [dispatch]);

  return {
    searchValue,
    loading,
    filteredTools,
  };
};
