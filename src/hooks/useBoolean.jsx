import {useState} from "react";

export default function useBoolean() {
  const [showAll, setShowAll] = useState(false);
  const [showJewe, setShowJewe] = useState(false);
  const [showMens, setShowMens] = useState(false);
  const [showWomen, setShowWomen] = useState(false);
  const [showEle, setShowEle] = useState(false);
  const [showBag, setShowBag] = useState(false);

  const handleAllClick = () => {
    setShowAll(false);
    setShowMens(false);
    setShowWomen(false);
    setShowEle(false);
    setShowBag(false);
    setShowJewe(false);
    setShowAll(true);
  };

  const handleJeweClick = () => {
    setShowAll(false);
    setShowMens(false);
    setShowWomen(false);
    setShowEle(false);
    setShowBag(false);
    setShowJewe(true);
  };

  const handleMensClick = () => {
    setShowAll(false);
    setShowWomen(false);
    setShowEle(false);
    setShowJewe(false);
    setShowBag(false);
    setShowMens(true);
  };

  const handleBagClick = () => {
    setShowAll(false);
    setShowMens(false);
    setShowWomen(false);
    setShowEle(false);
    setShowJewe(false);
    setShowBag(true);
  };

  const handleWomenClick = () => {
    setShowAll(false);
    setShowMens(false);
    setShowEle(false);
    setShowJewe(false);
    setShowBag(false);
    setShowWomen(true);
  };

  const handleEleClick = () => {
    setShowAll(false);
    setShowMens(false);
    setShowWomen(false);
    setShowJewe(false);
    setShowBag(false);
    setShowEle(true);
  };

  return [
    showAll,
    showJewe,
    showMens,
    showWomen,
    showEle,
    showBag,
    setShowAll,
    setShowJewe,
    setShowMens,
    setShowWomen,
    setShowEle,
    setShowBag,
    handleAllClick,
    handleJeweClick,
    handleMensClick,
    handleBagClick,
    handleWomenClick,
    handleEleClick,
  ];
}
