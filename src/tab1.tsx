import React from "react";
import { useTranslation } from "react-i18next";

const Tab1 = () => {
  const { t } = useTranslation("tab1");
  return <p className='p-4 border border-gray-400'>{t("description")}</p>;
};

export default Tab1;
