export interface AppStateListener {
    onStatChange(): void;
}

export class AppState {
    private static stat: AppState;

    listener: AppStateListener | undefined;


    _currentSelectIndex = -1;

    highLightStart = 0;
    aacDataHighLightStart = 0;
    highLightEnd = 0;

    public static getInstance(): AppState {
        if (this.stat == null) {
            this.stat = new AppState();
        }
        return AppState.stat;
    }

    set currentSelectIndex(v: number) {
        this._currentSelectIndex = v;
        this.listener?.onStatChange();
    }

    get currentSelectIndex(): number {
        return this._currentSelectIndex;
    }
}