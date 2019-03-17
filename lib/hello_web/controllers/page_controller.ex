defmodule HelloWeb.PageController do
  use HelloWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def resume(conn, _params) do
    text(conn, "Showing id Resume")
  end
end
