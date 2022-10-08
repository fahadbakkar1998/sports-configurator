import React, { useState, useEffect } from 'react';
import useZustand from '../../../utils/use.zustand';
import { getUFloat, rgbToHex, isLeafComponent } from '../../../common';
import { wallTextures } from '../../../utils/resource';
import * as Blueprint from '../../../utils/blueprint/blueprint';
import DragLabel from '../../Common/DragLabel';
import { HexColorPicker } from 'react-colorful';
import cn from 'classnames';
import RightBar_Content_CompInfo from './RightBar_Content_CompInfo';
import RightBar_Content_AddChildComp from './RightBar_Content_AddChildComp';
import { decimalPlaces } from '../../../constants';

let isDot = false;

const recursiveComponent = ({
  comp,
  depth,
  isOpen,
  initialOpenDepth,
  updateComponents,
}) => {
  // const [openChildren, setOpenChildren] = useState(
  //   isOpen && depth < initialOpenDepth,
  // );

  const openChildren = true;

  // useEffect(() => {
  //   !isOpen && setOpenChildren(isOpen);
  // }, [isOpen]);

  return (
    <>
      <RightBar_Content_CompInfo
        comp={comp}
        depth={depth}
        isOpen={isOpen}
        openChildren={openChildren}
        updateComponents={updateComponents}
        // onClick={() =>
        //   setOpenChildren(!openChildren)
        // }
      ></RightBar_Content_CompInfo>
      {!isLeafComponent(comp) && (
        <>
          {React.Children.toArray(
            Object.keys(comp.value).map((childKey) =>
              recursiveComponent({
                comp: comp.value[childKey],
                depth: depth + 1,
                isOpen: openChildren,
                initialOpenDepth,
                updateComponents,
              }),
            ),
          )}
          {Array.isArray(comp.value) && comp.addition && (
            <RightBar_Content_AddChildComp
              comp={comp}
              updateComponents={updateComponents}
              depth={depth + 1}
            />
          )}
        </>
      )}
    </>
  );
};

const RightBar_Content_Inspector = () => {
  const {
    selectedWall,
    setSelectedWall,
    selectedFloor,
    setSelectedFloor,
    selectedRoof,
    setSelectedRoof,
    cur3dItemEvent,
    setCur3dItemEvent,
    curUnit,
  } = useZustand();

  const inputSuffix = isDot ? '.' : '';

  useEffect(() => {
    isDot = false;
  }, [isDot]);

  /* 3D */
  const updateCur3dItemSize = (obj) => {
    const cloneCur3dItemEvent = { ...cur3dItemEvent };
    const itemSize = {};
    Object.entries(obj).forEach(([key, value]) => {
      isDot =
        value &&
        value.toString().lastIndexOf('.') === value.toString().length - 1;
      const cm = Blueprint.Dimensioning.cmFromMeasureRaw(value);
      itemSize[key] = cm;
    });
    cloneCur3dItemEvent.item.resize(itemSize);
    setCur3dItemEvent(cloneCur3dItemEvent);
  };

  const updateCur3dItemValue = (obj) => {
    const cloneCur3dItemEvent = { ...cur3dItemEvent };
    Object.entries(obj).forEach(([key, value]) => {
      cloneCur3dItemEvent.item[key] = value;
    });
    setCur3dItemEvent(cloneCur3dItemEvent);
  };

  const updateCur3dStaticSize = (index) => {
    const cloneCur3dItemEvent = { ...cur3dItemEvent };
    cloneCur3dItemEvent.item.setStaticSizeNo = index + 1;
    setCur3dItemEvent(cloneCur3dItemEvent);
  };

  const updateCur3dAccessory = (accessoryKey, accessoryNo) => {
    const cloneCur3dItemEvent = { ...cur3dItemEvent };
    cloneCur3dItemEvent.item.accessoryNos[accessoryKey] = accessoryNo;
    setCur3dItemEvent(cloneCur3dItemEvent);
  };

  const updateCur3dItemComponents = () => {
    const cloneCur3dItemEvent = { ...cur3dItemEvent };
    cur3dItemEvent.item.redrawComponents();
    setCur3dItemEvent(cloneCur3dItemEvent);
  };

  /* Roof */
  const updateCurRoofNum = (obj) => {
    const cloneSelectedRoof = { ...selectedRoof };
    Object.entries(obj).forEach(([key, value]) => {
      isDot =
        value &&
        value.toString().lastIndexOf('.') === value.toString().length - 1;
      const cm = Blueprint.Dimensioning.cmFromMeasureRaw(value);
      cloneSelectedRoof.item[key] = cm;
    });
    setSelectedRoof(cloneSelectedRoof);
  };

  const updateCurRoofValue = (obj) => {
    const cloneSelectedRoof = { ...selectedRoof };
    Object.entries(obj).forEach(([key, value]) => {
      cloneSelectedRoof.item[key] = value;
    });
    setSelectedRoof(cloneSelectedRoof);
  };

  /* 3D */
  const cur3dItemWidth =
    (cur3dItemEvent &&
      cur3dItemEvent.item &&
      cur3dItemEvent.item.getWidth &&
      parseFloat(
        Blueprint.Dimensioning.cmToMeasureRaw(
          cur3dItemEvent.item.getWidth(),
        ).toFixed(decimalPlaces),
      )) ||
    0;

  if (cur3dItemWidth) {
    console.log(
      'cur 3d item width: ',
      cur3dItemEvent.item.getWidth(),
      cur3dItemWidth,
    );
  }

  const cur3dItemHeight =
    (cur3dItemEvent &&
      cur3dItemEvent.item &&
      cur3dItemEvent.item.getHeight &&
      parseFloat(
        Blueprint.Dimensioning.cmToMeasureRaw(
          cur3dItemEvent.item.getHeight(),
        ).toFixed(decimalPlaces),
      )) ||
    0;

  const cur3dItemDepth =
    (cur3dItemEvent &&
      cur3dItemEvent.item &&
      cur3dItemEvent.item.getDepth &&
      parseFloat(
        Blueprint.Dimensioning.cmToMeasureRaw(
          cur3dItemEvent.item.getDepth(),
        ).toFixed(decimalPlaces),
      )) ||
    0;

  let cur3dItemMaterial;
  if (cur3dItemEvent && cur3dItemEvent.item && cur3dItemEvent.item.material) {
    cur3dItemMaterial = cur3dItemEvent.item.material;
    if (!cur3dItemMaterial.length) {
      cur3dItemMaterial = [cur3dItemMaterial];
    }
  }

  /* House Dimension */
  const curElevation =
    (selectedRoof &&
      parseFloat(
        Blueprint.Dimensioning.cmToMeasureRaw(
          selectedRoof.item.room.corners[0].elevation,
        ).toFixed(decimalPlaces),
      )) ||
    0;

  const updateElevation = (val) => {
    const cloneSelectedRoof = { ...selectedRoof };
    cloneSelectedRoof.item.room.corners[0].elevation =
      Blueprint.Dimensioning.cmFromMeasureRaw(val);
    setSelectedRoof(cloneSelectedRoof);
  };

  /* ROOF */
  const curRoofMiddleHeight =
    (selectedRoof &&
      selectedRoof.item &&
      selectedRoof.item.middleHeight &&
      parseFloat(
        Blueprint.Dimensioning.cmToMeasureRaw(
          selectedRoof.item.middleHeight,
        ).toFixed(decimalPlaces),
      )) ||
    0;

  console.log('curRoofMiddleHeight: ', curRoofMiddleHeight);
  console.log('selectedWall: ', selectedWall);
  console.log(
    'selectedRoof: ',
    selectedRoof && selectedRoof.item.room.corners[0].elevation,
    selectedRoof &&
      Blueprint.Dimensioning.cmToMeasureRaw(
        selectedRoof.item.room.corners[0].elevation,
      ),
  );

  return (
    <div className="RightBar_Content_Inspector">
      {selectedRoof && selectedRoof.item && (
        <>
          <div className="property-header">Building Dimensions</div>

          {/* House Height */}
          <div className="input-group">
            <DragLabel
              name={`Height(${curUnit}):`}
              value={curElevation}
              setValue={(val) => {
                updateElevation(val);
              }}
              offset={0.01}></DragLabel>
            <input
              className="input"
              type="text"
              value={curElevation + inputSuffix}
              onChange={(e) => {
                updateElevation(getUFloat(e.target.value));
              }}></input>
          </div>

          <div className="property-header">Roof</div>

          <div className="input-group">
            <div>Visible:</div>
            <input
              className="input"
              type="checkbox"
              checked={selectedRoof.item.visible}
              onChange={(e) => {
                updateCurRoofValue({ setVisible: e.target.checked });
              }}></input>
          </div>

          <div className="input-group">
            <div>Type:</div>
            <select
              className="input"
              value={selectedRoof.item.type}
              onChange={(e) => {
                const type = e.target.value;
                const cloneSelectedRoof = { ...selectedRoof };
                cloneSelectedRoof.item.setType = type;
                setSelectedRoof(cloneSelectedRoof);
              }}>
              <option value="GABLED">Gabled</option>
              <option value="SINGLE">Single Slop</option>
              <option value="FLAT">Flat</option>
            </select>
          </div>

          {selectedRoof.item.type !== 'FLAT' && (
            <div className="input-group">
              <DragLabel
                name={`Pitch(${curUnit}):`}
                value={curRoofMiddleHeight}
                setValue={(val) => {
                  updateCurRoofNum({ setMiddleHeight: getUFloat(val) });
                }}
                offset={0.01}></DragLabel>
              <input
                className="input"
                type="text"
                value={curRoofMiddleHeight + inputSuffix}
                onChange={(e) => {
                  const val = getUFloat(e.target.value);
                  updateCurRoofNum({
                    setMiddleHeight: val,
                  });
                }}></input>
            </div>
          )}
        </>
      )}

      {selectedWall && (
        <>
          <div className="property-header">Wall</div>

          <div className="input-group">
            <div>Material:</div>

            <select
              className="input"
              value={wallTextures.findIndex((e) => {
                return e.url === selectedWall.item.curTexture.url;
              })}
              onChange={(e) => {
                const index = e.target.value;
                const cloneSelectedWall = { ...selectedWall };
                cloneSelectedWall.item.curTexture = wallTextures[index];
                cloneSelectedWall.item.showCurTexture();
                setSelectedWall(cloneSelectedWall);
              }}>
              {wallTextures.map((texture, index) => (
                <option value={index} key={`wall_${index}`}>
                  {texture.name}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      {selectedFloor && (
        <>
          <div className="property-header">Floor</div>

          <div className="input-group">
            <div>Material:</div>

            <select
              className="input"
              value={wallTextures.findIndex((e) => {
                return e.url === selectedFloor.item.getTexture().url;
              })}
              onChange={(e) => {
                const j = e.target.value;
                const cloneSelectedFloor = { ...selectedFloor };
                const texture = wallTextures[j];
                cloneSelectedFloor.item.curTextureIndex = j;
                cloneSelectedFloor.item.setTexture(
                  texture.url,
                  texture.stretch,
                  texture.scale,
                );
                setSelectedFloor(cloneSelectedFloor);
              }}>
              {wallTextures.map((texture, j) => (
                <option value={j} key={`floor_${j}`}>
                  {texture.name}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      {cur3dItemEvent && (
        <>
          <div className="item-info-container">
            <img
              className="item-info-logo"
              src={cur3dItemEvent.item.metadata.image_path}></img>
            <div className="item-info">{cur3dItemEvent.item.metadata.name}</div>
            {/* <div className="item-info">
              Cost: ${cur3dItemEvent.item.getPrice()}
            </div> */}
            <div
              className="item-remove"
              onClick={() => {
                cur3dItemEvent.item.remove();
                setCur3dItemEvent(null);
              }}>
              Remove
            </div>
          </div>

          {cur3dItemEvent.item.metadata && (
            <>
              {cur3dItemEvent.item.metadata.format === 'configurator' ? (
                cur3dItemEvent.item.metadata.components &&
                React.Children.toArray(
                  Object.keys(cur3dItemEvent.item.metadata.components).map(
                    (compKey) =>
                      recursiveComponent({
                        comp: cur3dItemEvent.item.metadata.components[compKey],
                        isOpen: true,
                        depth: 0,
                        initialOpenDepth: 0,
                        updateComponents: updateCur3dItemComponents,
                      }),
                  ),
                )
              ) : (
                <>
                  {cur3dItemEvent.item.metadata.default_size && (
                    <>
                      {cur3dItemEvent.item.metadata.staticSizes ? (
                        <>
                          <div className="property-header">Size</div>

                          <div className="input-group">
                            <div
                              className={cn('option', {
                                active: cur3dItemEvent.item.staticSizeNo === 0,
                              })}
                              onClick={() => {
                                updateCur3dStaticSize(-1);
                              }}>
                              {cur3dItemEvent.item.metadata.default_size.name ||
                                'No'}
                            </div>

                            {React.Children.toArray(
                              cur3dItemEvent.item.metadata.staticSizes.map(
                                (staticSize, index) => (
                                  <div
                                    className={cn('option', {
                                      active:
                                        cur3dItemEvent.item.staticSizeNo ===
                                        index + 1,
                                    })}
                                    onClick={() =>
                                      updateCur3dStaticSize(index)
                                    }>{`${staticSize.name}(+${staticSize.extraPrice})`}</div>
                                ),
                              ),
                            )}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="property-header">Dimensions</div>

                          {/* Dimension width */}
                          <div className="input-group">
                            <DragLabel
                              name={`Length(${curUnit}):`}
                              value={cur3dItemWidth}
                              setValue={(width) =>
                                updateCur3dItemSize({ width: getUFloat(width) })
                              }
                              offset={0.01}></DragLabel>
                            <input
                              className="input"
                              type="text"
                              value={cur3dItemWidth + inputSuffix}
                              onChange={(e) => {
                                updateCur3dItemSize({
                                  width: getUFloat(e.target.value),
                                });
                              }}></input>
                          </div>

                          {/* Dimension depth */}
                          <div className="input-group">
                            <DragLabel
                              name={`Width(${curUnit}):`}
                              value={cur3dItemDepth}
                              setValue={(depth) =>
                                updateCur3dItemSize({ depth: getUFloat(depth) })
                              }
                              offset={0.01}></DragLabel>
                            <input
                              className="input"
                              type="text"
                              value={cur3dItemDepth + inputSuffix}
                              onChange={(e) => {
                                updateCur3dItemSize({
                                  depth: getUFloat(e.target.value),
                                });
                              }}></input>
                          </div>

                          {/* Dimension height */}
                          <div className="input-group">
                            <DragLabel
                              name={`Height(${curUnit}):`}
                              value={cur3dItemHeight}
                              setValue={(height) =>
                                updateCur3dItemSize({
                                  height: getUFloat(height),
                                })
                              }
                              offset={0.01}></DragLabel>
                            <input
                              className="input"
                              type="text"
                              value={cur3dItemHeight + inputSuffix}
                              onChange={(e) => {
                                updateCur3dItemSize({
                                  height: getUFloat(e.target.value),
                                });
                              }}></input>
                          </div>

                          {/* Dimension resizable */}
                          <div className="input-group">
                            <div>Resizable:</div>
                            <input
                              className="input"
                              type="checkbox"
                              checked={cur3dItemEvent.item.resizable || false}
                              onChange={(e) => {
                                updateCur3dItemValue({
                                  resizable: e.target.checked,
                                });
                              }}></input>
                          </div>

                          {/* Dimension proportionally */}
                          <div className="input-group">
                            <div>Proportionally:</div>
                            <input
                              className="input"
                              type="checkbox"
                              checked={
                                cur3dItemEvent.item.resizeProportionally ||
                                false
                              }
                              onChange={(e) => {
                                updateCur3dItemValue({
                                  resizeProportionally: e.target.checked,
                                });
                              }}></input>
                          </div>
                        </>
                      )}
                    </>
                  )}
                  {cur3dItemEvent.item.metadata.accessories &&
                    React.Children.toArray(
                      cur3dItemEvent.item.metadata.accessories.map(
                        (accessory, i) => (
                          <>
                            <div className="property-header">
                              {accessory.name}
                            </div>

                            <div className="input-group">
                              {/* <div
                            className={cn('option', {
                              active: cur3dItemEvent.item.accessoryNos[i] === 0,
                            })}
                            onClick={() => {
                              updateCur3dAccessory(i, 0);
                            }}>
                            No
                          </div> */}

                              {accessory.types &&
                                React.Children.toArray(
                                  accessory.types.map((type, j) => (
                                    <div
                                      className={cn('option', {
                                        active:
                                          cur3dItemEvent.item.accessoryNos[
                                            i
                                          ] ===
                                          j + 1,
                                      })}
                                      onClick={() =>
                                        updateCur3dAccessory(i, j + 1)
                                      }>{`${type.name}(+${type.extraPrice})`}</div>
                                  )),
                                )}
                            </div>
                          </>
                        ),
                      ),
                    )}
                  {/* {cur3dItemMaterial && (
                    <>
                      <div className="property-header">Color</div>{' '}
                      {React.Children.toArray(
                        cur3dItemMaterial.map((mat, index) => (
                          <>
                            <div className="input-group">
                              <div>{mat.name}:</div>
                              <div
                                className="input pointer"
                                onClick={() => {
                                  const clone = { ...cur3dItemEvent };
                                  clone.item.material[index].selected =
                                    !mat.selected;
                                  setCur3dItemEvent(clone);
                                }}
                                style={{
                                  backgroundColor: rgbToHex(mat.color),
                                }}></div>
                            </div>
                            <div className="input-group">
                              <div></div>
                              <HexColorPicker
                                className={cn('input', {
                                  active: mat.selected,
                                })}
                                color={rgbToHex(mat.color)}
                                onChange={(color) => {
                                  const clone = { ...cur3dItemEvent };
                                  const hexColor = `0x${color.substring(1)}`;
                                  clone.item.material[index].color.setHex(
                                    hexColor,
                                  );
                                  clone.item.material[index].emissive.setHex(
                                    hexColor,
                                  );
                                  clone.item.material[index].needsUpdate = true;
                                  blueprintJS.three.render(true);
                                  setCur3dItemEvent(clone);
                                }}></HexColorPicker>
                            </div>
                          </>
                        )),
                      )}
                    </>
                  )} */}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default RightBar_Content_Inspector;
