import React from 'react';
import {useLocation} from "react-router-dom";

export default function Items() {
  const search = useLocation().search;
  const token = new URLSearchParams(search).get('token');
  return (token)
}