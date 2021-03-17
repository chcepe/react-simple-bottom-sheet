import React, { FC, useEffect, useRef, useState } from 'react';
import { animate, AnimatePresence, useDragControls, useMotionValue } from 'framer-motion';

import * as T from './types';
import * as S from './styles';

const BottomSheetComp: FC<T.Props> = ({
  id,
  content,
  header,
  footer,
  dragHandle,
  getHandleClose,
  getHandleCloseCustom,
  getHandleOpen,
  getSheetVisibility,
  onOpen,
  onClose,
  darkMode,
  maskClosable,
  debug,
}) => {
  const sheetY = useMotionValue(0);
  const controls = useDragControls();
  const [open, setOpen] = useState(true);

  const sheetRef = useRef<HTMLDivElement>(null);

  const [sheetHeight, setSheetHeight] = useState(0);
  const [arrow, setArrow] = useState<T.Arrow>('straight');

  const sheetId = id ?? 'default';
  const elementId = `chcepe-bottom-sheet-${sheetId}`;

  const handleClose = () => {
    if (!open) return;
    setOpen(false);
    onClose?.();
  };

  const handleCloseCustom = (cb: T.CallBack) => {
    setOpen(false);
    cb?.();
  };

  const handleOpen = () => {
    setOpen(true);
    onOpen?.();
  };

  getHandleCloseCustom?.(handleCloseCustom);
  getHandleOpen?.(handleOpen);
  getHandleClose?.(handleClose);
  getSheetVisibility?.(open);

  useEffect(() => {
    setSheetHeight(sheetRef?.current?.offsetHeight ?? 0);
    if (open) {
      onOpen?.();
    }
  }, [sheetRef, open, onOpen]);

  const maxDrag = sheetHeight / 2;

  const removeToDom = () => {
    if (typeof window !== 'undefined') {
      document?.getElementById?.(elementId)?.remove();
    }
  };

  return (
    <>
      <AnimatePresence onExitComplete={() => removeToDom()}>
        {open && (
          <S.Wrapper
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <S.DraggableContainer
              id="draggable-container"
              style={{
                y: sheetY,
              }}
              drag="y"
              dragControls={controls}
              dragConstraints={{
                top: 0,
                bottom: sheetHeight,
              }}
              dragElastic={0.1}
              onDrag={(_, info) => {
                setArrow(maxDrag < info.offset.y ? 'down' : 'up');
              }}
              onDragStart={(e, info) => {
                if (!(e?.target as HTMLDivElement)?.classList?.contains('draggable')) {
                  // @ts-ignore
                  controls?.componentControls.forEach((entry) => {
                    entry.stop(e, info);
                  });
                }
              }}
              onDragEnd={() => {
                setArrow('straight');
                if (sheetY.get() < maxDrag) {
                  animate(sheetY, 0, { type: 'spring' });
                } else {
                  setArrow('down');
                  handleClose();
                }
              }}
            >
              <S.Mask
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                debug={debug}
                {...(maskClosable
                  ? {
                      onTap: () => handleClose(),
                    }
                  : {})}
                {...(dragHandle?.includes('mask') ? { className: 'draggable', cursorMove: true } : {})}
              />
              <S.Sheet
                ref={sheetRef}
                id="sheet-content"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{
                  duration: 0.2,
                }}
                darkMode={darkMode}
              >
                <S.Content>
                  <S.Header withBorder={Boolean(header)}>
                    <S.HandleIcon type={arrow}>
                      <div className="bs-drag-handle-ic" />
                    </S.HandleIcon>
                    {header && <S.HeaderContent>{header}</S.HeaderContent>}
                    {dragHandle?.includes('header') && <S.DragHandle debug={debug} />}
                  </S.Header>

                  <S.Body>
                    <S.BodyContent>{content}</S.BodyContent>
                    {dragHandle?.includes('content') && <S.DragHandle debug={debug} />}
                  </S.Body>
                  {footer ? (
                    <S.Footer>
                      {footer}
                      {dragHandle?.includes('footer') && <S.DragHandle debug={debug} />}
                    </S.Footer>
                  ) : (
                    <div />
                  )}
                </S.Content>
              </S.Sheet>
            </S.DraggableContainer>
          </S.Wrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomSheetComp;
